'use client'

import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
const ArticalPage =  () => {

    const parmameters = useParams()
    const slug = parmameters.slug
    const [counter,setCoutner] = useState(0)
    const searchParameters = useSearchParams()
    const filter = searchParameters.get('filter')
    const lang = searchParameters.get('lang')
    return (
        
        <div className="flex flex-col relative  gap-2">

      Counter : {counter}
            <button onClick={()=>{setCoutner(prev => prev + 1)}}>Increment</button>           
            <button onClick={()=>{setCoutner(prev => prev - 1)}}>Decrement</button>  

            <h2>
                lanugaue: {lang}
                {/* en */}
            </h2>
            <h1>
                Title: {slug} 
                {/* frist-blog */}
            </h1>
            <h1>
                Category: {filter}
                {/* React  */}
            </h1>
        </div>
    );
}

export default ArticalPage;