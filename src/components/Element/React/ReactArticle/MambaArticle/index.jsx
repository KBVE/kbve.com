//!     [WIP]   -> Mount / VE system is broken and needs to be refactored, memory leaks.
//*     [ReactArticle]          ->      [MambaArticle]
//*     This JSX Component will render the generic articles, it should be called via <MambaArticle.astro>
//*     {Astro} ->  [JSX] -> [React] -> [ReactArticle]  -> [MambaArticle]
//?     Reference - https://kbve.com/application/javascript#react

//*     {React}
import React, { Fragment, useState, useEffect, useCallback, useRef  } from "react";
import DOMPurify from 'dompurify'


//*     Function MambaArticle()
export default function MambaArticle({ article }) {
    
    //?     [STATES]
    const [isRender, setRender] = useState(true);
    const [isVE, setVE] = useState(true);                   // Force VE -> True

    //!     [MOUNT]     ->      12/16/2022 @h0ly => Currently broken, as well as the canvas system. I decided to skip it for now.
    const isMounted = useRef(true);
    const canvas = useRef(null);                    

    //?     [STATES]    ->  [FIELDS]
    const [_fieldTitle, setTitle] = useState(article.title);    
    const [_fieldDescription, setDescription] = useState(article.description);
    const [_fieldImg, setImg] = useState(article.img);
    const [_fieldTags, setTags] = useState(article.tags);
    const [_fieldDate, setDate] = useState(article.date);
    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(article.content)
      })
    
    const mapTags = _fieldTags.map((_fieldTags) =>
    <a rel="noopener noreferrer" href={`https://kbve.com/t/${_fieldTags}`} className="inline-block text-2xl font-semibold sm:text-3xl" key={_fieldTags}><span className="px-2 py-1 text-xs rounded-full bg-orange-500">#{_fieldTags}</span></a>
  );
  // {isMounted} is set to false when we unmount the component.
  useEffect(() => {
      return () => {
        isMounted.current = false
      }
    }, [])

  // Call

  
    const sendRequest = useCallback(async () => {
        if (isRender) { return }
        setRender(true)
        await API.sendRequest()
        if (isMounted.current){   setRender(false)  }
    }, [isRender]) 


    //!     {React}     ->  {VE}

    if(isRender === false)
        {
            return  (<>
                    
                    </>);
        }
    else    {

        return (
        <Fragment>
            <div id="container" className="">
                    {/* {isVE === true && (

                    <div className="loading-overlay">
                        <p>VE is Loading... ({}%)</p>
                    </div>
                    )} */}
                <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 ">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                        <img src={_fieldImg} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
                            <div className="space-y-2">
                                {mapTags}
                                <p className="text-xs "><a rel="noopener noreferrer" href="##" className="text-xs hover:underline">{_fieldTitle}</a>
                                </p>
                            </div>
                            <div className="">
                                <p>         
                                {_fieldDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container  px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                        <div className="flex items-center justify-between">
                            <span className="text-sm dark:text-gray-400">{_fieldDate}</span>
                           {mapTags}
                        </div>
                        <div className="mt-3">
                            <a rel="noopener noreferrer" href="" className="text-2xl font-bold hover:underline">{_fieldTitle}</a>
                            <div
                            // rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                            dangerouslySetInnerHTML={sanitizedData()}
                            />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <a rel="noopener noreferrer" href="https://kbve.com/support/" className="hover:underline ">Contact Support</a>
                            <div>
                                {/* <a rel="noopener noreferrer" href="" className="flex items-center">
                                    <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                    <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    
        );
    }
}
