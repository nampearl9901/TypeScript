import React from 'react'
import Userinfor from './Userinfor';

// tsrfc

export interface InteraceUser{
    name:string;
    age:number;
}   


export default function DemoProps() {
    let user: InteraceUser ={
        name:'Alice',
        age:2,
    }
  return (
    <div>
        <Userinfor data={user} />
    </div>
  );
}