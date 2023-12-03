import anim from './anim.module.css'
export function Aside({children,bg}:{children:string|React.ReactNode,bg:"red"|'blue'|'green'|'yellow'|string}){
    return (
      <div className="group relative">
        <img src={bg} className={`
        transition  p-4   w-full h-full absolute z-0 opacity-0 bg-slate-400
        group-hover:translate-x-[150%] group-hover:-rotate-12 delay-10 duration-1000 group-hover:opacity-100`}/>
        <div >{children}</div>
        
      </div>
    )
  }
  export const SliderLeft = ({children,classNames,bkg}:{children:string|React.ReactNode,classNames?:string,bkg?:string}) => {
   

    return (
     
  <div  className={anim.fillleft}>{children}</div>
  
  
     
    )
  }