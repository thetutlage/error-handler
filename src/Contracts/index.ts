/**
 * @relayin/error-handler
 *
 * (c) Harminder Virk <harminder.virk@relay.in>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export type ErrorsConfig = {
  exceptionCodes: {
    [code: string]: number,
  },

  errorCodes: {
    [code: number]: {
      message: string,
    },
  },

  validationCodes?: {
    [rule: string]: number,
  },

  codesBucket: number,
}

export type JSONAPIErrorNode = {
  code: number,
  title: string,
  source?: {
    pointer: string,
  },
  meta?: {
    args: any[],
  },
}

export interface ExceptionManagerContract {
  parse (): void,
  refs <T extends keyof any> (): { [K in T]: K },
  toResponse (error: any): { status: number, errors: JSONAPIErrorNode[] },
}
