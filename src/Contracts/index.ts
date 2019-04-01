/**
 * @relayin/error-handler
 *
 * (c) Harminder Virk <virk@adonisjs.com>
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