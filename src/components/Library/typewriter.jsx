//?     Credit to TypewriterJS v2 - Repo (https://github.com/tameemsafi/typewriterjs)
//!     [Migrate]       ->  @c/Action/Typewriter
import React from 'react';                                                                  //*     [React]
import Typewriter from "typewriter-effect";                                                 //*     [TypeWriter]    ->  [React]:[Library]


//!     [TODO]          ->  {?Unity}->{Object}->{{instance of window}.{unityInterpolServices}}  ??>>    #Without Unity window, functions have to be caught.

export default function xTypeWriter({text, typewriterClassName, buttonClassName}) {

    //?     [STATE]                                 ->  {?extends}  ->  {stateMachine}
    const   [_typewriterText, setText]              =   React.useState(text);
    const   [_buttonClassName, setButtonClass]       =   React.useState(buttonClassName);
    const   [_typewriterClassName, setClass]        =   React.useState(typewriterClassName);
    const   [_isWriting, setWriting]                =   React.useState(false);

    //?     [REF]
    const _k_typewriter                             = React.useRef(null);       //  React.createRef();
    const isMounted                                 = React.useRef(true);       //  React.createRef();


    //*     [MOUNT]
    //?     [useEffect]
    React.useEffect(() => {
                return () => {      isMounted.current = false;   }
    }, []);

    // React.useEffect(() => {
    //     console.log('Checking...');
    //     _k_typewriter.current.addEventListener('load', function (e) {  
    //         console.log('IN here');
    //         //  OnLoad
           
    //   });
    // }, [_k_typewriter]);

    //*     [React Functions]   ->  {?perFrameRender()}
    //*     [Astro]             ->  [HOT][SWAP]             ->  {_preact}   :-> `import h from 'preact';`
    //*     [Astro]             ->  [CORE][SWUP]            ->  {disabled}  :-> Currently facing {hydration} issues #102 (https://github.com/KBVE/kbve.com/issues/102)

    const sendRequest = React.useCallback(async () => {
        if (_isWriting) { return; }
        setWriting(true);
        await this.sendRequest();                        //!     THROWS ERROR
        if (isMounted.current){   setWriting(false);  }
      }, [_isWriting]) 
    

    
    if(_isWriting === false)
        {
            
            return  (<> 
            <button type="button" className={_buttonClassName} disabled={_isWriting} onClick={sendRequest}>Greet
                <span className="absolute top-0 right-0 px-5 py-1 text-xs gradient-text tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-orange-400">New</span>
            </button> 
            </>);
        }   else    {
            
            return (
                    <>
                        <div    ref={_k_typewriter}    >
                            <Typewriter 
                                options = {{
                                    wrapperClassName: _typewriterClassName
                                }                                }
                                onInit  =   {(typewriter)   => {
                                        typewriter
                                        .typeString(_typewriterText)
                                            .callFunction(() => {
                                                console.log('Typing String');
                                                //? Call Unity when Manga is typing?
                                            })
                                        .pauseFor(5000)
                                        .start();}
                                }
                                />
                        </div>
                    </>
            );
        }
  }