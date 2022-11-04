import { spawn } from 'child_process';

const projectDescriptorsInBuildOrder = [
    {
        directory: 'apps/topics',
        isApp: true
    },
    {
        directory: 'apps/conversations',
        isApp: true
    },
    {
        directory: 'apps/tasks',
        isApp: true
    }
]

const reactUiProjects = [
    'components',
    'conversations',
    'tasks'
]

try {
    await buildPeerFramework('AIRline', projectDescriptorsInBuildOrder, true)
    await buildUI('react', reactUiProjects)
} catch (e) {
    console.log(e)
}

async function buildPeerFramework(
    frameworkDirectoryName,
    projectDescriptorsInBuildOrder,
    runRushUpdate
) {
    process.chdir('../' + frameworkDirectoryName);
    if (runRushUpdate) {
        await wireInDependencies(frameworkDirectoryName)
    }
    await buildProjects(projectDescriptorsInBuildOrder, 'npm', ['run', 'build']);
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
    projectDescriptorsInBuildOrder,
    command,
    parameters
) {
    for (const projectDescriptor of projectDescriptorsInBuildOrder) {
        let isApp = false;
        let projectDirectory
        if (projectDescriptor instanceof Object) {
            projectDirectory = projectDescriptor.directory
            isApp = projectDescriptor.isApp
        } else if (typeof projectDescriptor === 'string') {
            projectDirectory = projectDescriptor
        } else {
            throw `Expecting either object or string as a Project Descriptor.`
        }
        const directoryDepth = projectDirectory.split('/');
        let navigateBackPath = '..'
        for (let i = 1; i < directoryDepth.length; i++) {
            navigateBackPath = '../' + navigateBackPath
        }
        process.chdir('./' + projectDirectory);

        if (isApp) {
            await execute('node', ['generate.mjs'], projectDirectory);
        }

        await execute(command, parameters, projectDirectory);

        process.chdir(navigateBackPath);
    };
}

async function wireInDependencies(
    frameworkName
) {
    await execute('rush', ['update'], frameworkName)
}

async function execute(
    command,
    parameters,
    projectDirectory
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
        ${code ? 'ERROR' : 'DONE'}: '${command} ${parameters.join(' ')}' in ${process.cwd()}
    
        `);
            resolve(code)
        });
    }).then((returnCode) => {
        if (returnCode != 0) {
            throw new Error(`
        Suspending after ${projectDirectory}
        `)
        }

        return returnCode
    })

}