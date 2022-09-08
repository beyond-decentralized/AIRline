import fse from 'fs-extra';

const srcDir = `app`;
const destDir = `../../UIs/react/tasks/public/AIRport/apps/@airline/tasks/`;

fse.copySync(srcDir, destDir, { overwrite: true })
