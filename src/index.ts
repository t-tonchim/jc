import {Command, flags} from '@oclif/command'
import * as stringify from 'json-stringify-pretty-compact'

class Jc extends Command {
  static description = 'jc is json cli, provide json manipulation by javascript.'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [
    {name: 'command'},
    {name: 'json'}
  ]

  async run() {
    const {flags,args} = this.parse(Jc)
    if (!args.json) return

    const object = JSON.parse(args.json)
    const entries = Object.entries(object)
    const keys = Object.keys(object)
    const values = Object.values(object)

    if (args.command) {
      this.log(stringify(eval(args.command)))
    } else {
      this.log(stringify(object))
    }
  }
}

export = Jc
