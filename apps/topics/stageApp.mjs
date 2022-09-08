import fse from 'fs-extra';

const srcDir = `app`;
const destDir = `../../UIs/react/conversations/public/AIRport/apps/@airline/topics/`;

fse.copySync(srcDir, destDir, { overwrite: true })
