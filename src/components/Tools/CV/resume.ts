import { deepMap, task, onMount, onAction } from 'nanostores';
import DOMPurify from "dompurify";

//import appwrite from "@lib/appwrite";

const cleanString = (__data) => {
    return DOMPurify.sanitize(__data, {
        USE_PROFILES: { html: false, mathMl: false, svg: false },
      });
}


export const $resumeMeta = deepMap({
   resume: [
    {
        meta: [{
            tool: 'kbve',
        }],
        basics: [{
            name: 'Anon',
            label: 'Meme God',
            image: '',
            summary: '',
            website: '',
            email: '',
            location: [
                {
                    city: '',
                    countryCode: ''
                }
            ],
            profile: [
                {
                    username: '',
                    url: '',
                    network: ''
                }, 
                {
                    username: '',
                    url: '',
                    network: ''
                }
            ]
        }]
    }
   ]
});

onAction($resumeMeta, ({ id, actionName, onError, onEnd }) => {
    console.log(`Action ${actionName} -> ${id} was started`)
    onError(({ error }) => {
      console.error(`Action ${actionName} was failed`, error)
    })
    onEnd(() => {
      console.log(`Action ${actionName} was stopped`)
    })
  })

onMount($resumeMeta, () => {

})


export const updateResumeSingleton = async ( mapKey: string, mapValue: string) => {
    task(async() => {
        try {
       const _mapKey = cleanString(mapKey);
       const _mapValue = cleanString(mapValue);
        }
        catch (error)
        {
            //! -> Send Error to the Error Atom ()
        }
    });
}

export const updateResumeMap = async ( mapJSON ) => {
    task(async() => {

        //? Parse through Form Map Submission
        //?     -> Run Task Singleton on each variable to set the key/value.

    });
}