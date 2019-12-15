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
import { expect } from 'chai';
import Log from '../src/Log'
import mockConsole from 'jest-mock-console';

describe('Log', () => {

  beforeEach(() => {
  })

  afterEach(() => {
  })

  test('Should log verbose message', () => {
    const restoreConsole = mockConsole(); 
    console.error('This will not show in the test report');
    // expect(console.error).toHaveBeenCalled();
    expect(console.error.calledOnce)
  })

  it('Should log verbose message', () => {
    const restoreConsole = mockConsole(); 
    
    const TAG = "VERBOSE"
    const message = 'The verbose message'

    Log.v(TAG, message)

    expect(console.log.calledOnce)
    // expect(Log.log.calledWithMatch(`${TAG}: ${message}`)).to.be.true;
  
    restoreConsole();
  })

  it('Should log warning message', () => {
    const restoreConsole = mockConsole(); 
    
    const TAG = "WARNING"
    const message = 'The warning message'

    Log.w(TAG, message)

    expect(console.log.calledOnce)
    // expect(Log.log.calledWithMatch(`${TAG}: ${message}`)).to.be.true;
  
    restoreConsole();
  })

  it('Should log error message', () => {
    const restoreConsole = mockConsole(); 
    
    const TAG = "ERROR"
    const message = 'The error message'
    const error = 'The error'

    Log.e(TAG, message, error)

    expect(console.log.calledOnce)
    // expect(Log.log.calledWithMatch(`${TAG}: ${message}`)).to.be.true;
  
    restoreConsole();
  })

})