'use strict';

/**
 * androidlog
 *
 * Copyright (c) Andreas Göransson (https://github.com/agoransson)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import moment from 'moment'

const LEVEL_VERBOSE = 'v'
const LEVEL_WARNING = 'w'
const LEVEL_ERROR = 'e'

/**
 * Basic logging to console.
 */
export default class Log {

  static get LEVEL_VERBOSE() {
    return LEVEL_VERBOSE;
  }

  static get LEVEL_WARNING() {
    return LEVEL_WARNING;
  }

  static get LEVEL_ERROR() {
    return LEVEL_ERROR;
  }

  /**
   * Print a log message to console, with a timestamp and log-level.
   * 
   * @param {string} aFormat    The format to use 
   * @param {int}    aLevel     The log level.
   * @param {string} aTag       The TAG for the message. 
   * @param {string} aMessage   The message to print.
   */
  static log(aFormat, aLevel, aTag, aMessage) {
    let time = moment().format()
    let logEntry = `${time} ${aLevel} ${aTag}: ${aMessage}`
    console.log(aFormat, logEntry)
  }

  /**
   * Print a verbose log message to the console with a timestamp.
   * 
   * @param {string} aTag       The TAG for the message. 
   * @param {string} aMessage   The message to print.
   */
  static v(aTag, aMessage) {
    this.log('\x1b[0m%s\x1b[0m', LEVEL_VERBOSE, aTag, aMessage)
  }

  /**
   * Print a waring log message to the console with a timestamp.
   * 
   * @param {string} aTag       The TAG for the message. 
   * @param {string} aMessage   The message to print.
   */
  static w(aTag, aMessage) {
    this.log('\x1b[33m%s\x1b[0m', LEVEL_WARNING, aTag, aMessage)
  }

  /**
   * Print an error log message to the console with a timestamp.
   * 
   * @param {string} aTag       The TAG for the message. 
   * @param {string} aMessage   The message to print.
   * @param {string} aError     An optional error message.
   */
  static e(aTag, aMessage, aError) {
    if (aError) {
      this.log('\x1b[31m%s\x1b[0m', LEVEL_ERROR, aTag, `${aMessage} - ${aError}`)
    } else {
      this.log('\x1b[31m%s\x1b[0m', LEVEL_ERROR, aTag, aMessage)
    }
  }
}

export const v = Log.prototype.v;
export const w = Log.prototype.w;
export const e = Log.prototype.e;
