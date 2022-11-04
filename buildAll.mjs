import { spawn } from 'child_process';

const projectDirectoriesInBuildOrder = [
    'apps/topics',
    'apps/conversations',
    'apps/tasks'
]

const reactUiProjects = [
    'components',
    'conversations',
    'tasks'
]

try {
    await buildPeerFramework('AIRline', projectDirectoriesInBuildOrder, true)
    await buildUI('react', reactUiProjects)
} catch (e) {
    console.log(e)
}

async function buildPeerFramework(
    frameworkDirectoryName,
    projectDirectoriesInBuildOrder,
    runRushUpdate
) {
    process.chdir('../' + frameworkDirectoryName);
    if (runRushUpdate) {
        await wireInDependencies(frameworkDirectoryName)
    }
    await buildProjects(projectDirectoriesInBuildOrder, 'npm', ['run', 'build']);
}

async function buildUI(
    uiType,
    uiProjects
) {
    process.chdir('UIs/' + uiType);
    await buildProjects(uiProjects, 'npm', ['run', 'build']);
    process.chdir('../..');
}

async function buildProjects(
    projectsDirectoriesInBuildOrder,
    command,
    parameters
) {
    for (const projectDirectory of projectsDirectoriesInBuildOrder) {
        const directoryDepth = projectDirectory.split('/');
        let navigateBackPath = '..'
        for (let i = 1; i < directoryDepth.length; i++) {
            navigateBackPath = '../' + navigateBackPath
        }
        process.chdir('./' + projectDirectory);

        const returnCode = await execute(projectDirectory, command, parameters);

        process.chdir(navigateBackPath);

        if (returnCode != 0) {
            throw new Error(`
        Suspending after ${projectDirectory}
        `)
        }
    };
}

async function wireInDependencies(
    frameworkName
) {
    await execute(frameworkName, 'rush', ['update'])
}

async function execute(
    operation,
    command,
    parameters
) {
    return new Promise((resolve, _reject) => {
        if (/^win/.test(process.platform)) {
            parameters = [
                '/s',
                '/c',
                command,
                ...parameters
            ]
            command = 'cmd'
        }

        process.stdout.write(`
        RUNNING '${command} ${parameters.join(' ')}' in ${process.cwd()}
    
        `)

        const runCommand = spawn(command, parameters);

        runCommand.stdout.on("data", data => {
            console.log(`${data}`)
        });

        runCommand.stderr.on("data", data => {
            console.log(`${data}`)
        });

        runCommand.on('error', (error) => {
            console.log(`${error.message}`);
        });

        runCommand.on("close", code => {
            console.log(`
        ${code ? 'ERROR' : 'DONE'}: ${operation}

    `);
            resolve(code)
        });
    })

}