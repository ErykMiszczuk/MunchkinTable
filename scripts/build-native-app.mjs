import shell from "shelljs";

const cwd = shell.pwd();
const rootDirectory = shell.cd('..');
shell.echo(shell.pwd());

shell.echo("Building app");
shell.cd('webapp');
shell.exec('npm run build');
shell.cd('../api');
shell.exec('npm run build');
shell.cd('..')
shell.rm('-rf', 'api/public');
shell.mkdir('api/public');
shell.cp('-r', 'webapp/dist/*', 'api/public')
// shell.exec('npm run pull-webapp');

// shell.cd('../nativeapp');
// shell.exec('npm run pull-server-app');
shell.rm('-rf', 'nativeapp/server-app');
shell.mkdir('nativeapp/server-app');
shell.cp('-r', 'api/*', 'nativeapp/server-app');
shell.echo("Assets copied")
shell.cd('nativeapp');
const buildStatus = shell.exec('npm run build-release', {silent: true}).code;
if (buildStatus !== 0) {
    shell.echo("Building app failed")
} else {
    shell.echo("Build success")
}
shell.echo("Finishing")

