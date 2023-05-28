import React from "react";

function useLocalStorage(itemName, initialValue){
    const [Item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [err, setErr] = React.useState(false);
    
    
  
    React.useEffect(()=>{
  
      setTimeout(() => {
        console.log('uwuwuwu')
        try{
          const localStorageResponse = localStorage.getItem(itemName);
          let parsedItems;
          if(!localStorageResponse){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItems = initialValue;
      
          }else{
      
            let jsonResponse = JSON.parse(localStorageResponse);
            parsedItems = jsonResponse;
            setItem(parsedItems)
          }
    
          setLoading(false);
        }
        catch (error){
          setLoading(false);
          setErr(true);
        }
      }, 4000);
    }, []);
    
  
   
  
    function saveItems(newItems){
      let stringJson = JSON.stringify(newItems)
      localStorage.setItem(itemName, stringJson)
      setItem(newItems);
    };
  
    return {Item, saveItems, loading, err};
}

export {useLocalStorage}