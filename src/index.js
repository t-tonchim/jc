const {Command, flags} = require('@oclif/command')

class JcCommand extends Command {
  static args = [
    {name: 'command'}
  ]
  async run() {
    const {flags, args} = this.parse(JcCommand)
    const name = flags.name || 'world'
    this.log(`hello ${command} from ./src/index.js`)
  }
}

JcCommand.description = `Describe the command here
...
Extra documentation goes here
`

JcCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = JcCommand
