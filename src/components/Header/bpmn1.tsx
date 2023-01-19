import React, { useState, useEffect } from "react";
import ReactBpmn from 'react-bpmn';
interface ISelectType {
    options?: any;
    handleInputChange?: any;
    className?: string;
};
const BPMN = (props: ISelectType) =>{
 
        const onShown = ()=> {
          console.log('diagram shown');
        }
       
        const onLoading = () => {
          console.log('diagram loading');
        }
       
        const onError = (err:any) => {
          console.log('failed to show diagram', err);
        }
       
        return (
          <ReactBpmn
            url="/public/diagram.bpmn"
            onShown={ onShown }
            onLoading={ onLoading }
            onError={ onError }
          />
        );
};

export default BPMN;

