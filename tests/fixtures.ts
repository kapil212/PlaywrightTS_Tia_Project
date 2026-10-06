import {test as base,expect} from '@playwright/test'

const BLOCKED=['googlesyndication.com', 'doubleclick.net', 'googleadservices.com',
  'google-analytics.com', 'googletagmanager.com', 'adservice.google.com',];

  export const test=base.extend({
    page:async({page},use)=>{
        await page.route('**/*',(route)=>
        BLOCKED.some((d)=>route.request().url().includes(d))?route.abort():route.continue()
        
        );

        await use(page);
    },

  });

  export{expect};