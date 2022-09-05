import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TbResize } from 'react-icons/tb';
import { useState } from 'react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [lengtho, setlengtho] = useState("");
  const [widtho, setwidtho] = useState("");
  const [lengthc, setlengthc] = useState("");
  const [widthc, setwidthc] = useState("");
  const [arrother, setarrother] = useState({show:false})

  const calculate =(e)=>{
    e.preventDefault()
    var L=parseInt(lengtho);
    var B=parseInt(widtho);
    
    var l=parseInt(lengthc);
    var b=parseInt(widthc);
    
    if(Number.isInteger(L) && Number.isInteger(B) && Number.isInteger(l) && Number.isInteger(b)){
      ///////////////////////////////////////// Length Sid : /////////////////////////////////////////
      if (L<=B){
        var change=L;
        L=B;
        B=change
        //console.log(L,B)
      }

      if (l<=b){
        var change1=l;
        l=b;
        b=change1;
        //console.log(l,b)
      }

      if (l <= L && b <= B){
        var columnsl=Math.floor(B/b);
        var rowsl=Math.floor(L/l);
        var horizontall=rowsl * columnsl;
        var lenght_used_Ll = rowsl * l;
        var lenght_used_Bl = columnsl * b;
        var lenght_screap_Ll = L - lenght_used_Ll; 
        var lenght_screap_Bl = B - lenght_used_Bl;
        var zl = 0;

        var entire_row_widthl_screp=0
        var entire_row_heightl_screp=0
        var single_col_widthl_screp=0
        var single_col_heightl_screp=0
          if (b <= lenght_screap_Ll && l <= B)
          {
              //z = B / l;
              lenght_used_Ll=lenght_used_Ll+b
              lenght_screap_Ll=lenght_screap_Ll-b
              zl = Math.floor(B / l);
              
              entire_row_widthl_screp=((zl*l)/B)*100 + "%"
              entire_row_heightl_screp=(b/L)*100 + "%"
              single_col_widthl_screp=(1/zl)*100 + "%"
              single_col_heightl_screp=(b/L)*100 + "%"

              //console.log("dfdsfdssdf " + single_col_widthl_screp)
          }
        horizontall = horizontall + zl;
        var entire_row_widthl=((lenght_used_Bl)/B)*100 + "%"
        var entire_row_heightl=(l/L)*100 + "%"
        var single_col_widthl=((1)/columnsl)*100 + "%"
        var single_col_heightl=(l/L)*100 + "%"
        //console.log(columnsl,rowsl)
      }

      /////////////////////////////////////////// Bridth sid : /////////////////////////////////////
      if (l <= B && b <= L){
        var columnsw = Math.floor(L / b);
        var rowsw = Math.floor(B / l);
        var verticalw = rowsw * columnsw;
        var lenght_used_Lw = rowsw * l
        var lenght_used_Bw = columnsw * b;
        var lenght_screap_Lw = B - lenght_used_Lw;
        var lenght_screap_Bw = L - lenght_used_Bw;
        var zw = 0;

        var entire_row_widthw_screp=0
        var entire_row_heightw_screp=0
        var single_col_widthw_screp=0
        var single_col_heightw_screp=0
          if (b <= lenght_screap_Lw && l <= L)
          {
              lenght_used_Lw=lenght_used_Lw + b
              lenght_screap_Lw=lenght_screap_Lw-b
              zw = Math.floor(L / l);

              entire_row_widthw_screp=(b/B)*100 + "%"
              entire_row_heightw_screp=((l*zw)/L)*100 + "%"
              single_col_widthw_screp=100 + "%"
              single_col_heightw_screp=(1/zw)*100 + "%"

            console.log(entire_row_widthw_screp,entire_row_heightw_screp,single_col_widthw_screp,single_col_heightw_screp,zw)
          }
        verticalw = verticalw + zw;
        var entire_row_width=((rowsw*l)/B)*100 + "%"
        var entire_row_height=(b/L)*100 + "%"
        var single_col_width=((1)/rowsw)*100 + "%"
        var single_col_height=(b/L)*100 + "%"
        //console.log(entire_row_width,entire_row_height,single_col_width,single_col_height)
      }
      
      setarrother({show:true,L,B,l,b,columnsl,rowsl,horizontall,lenght_used_Ll,lenght_screap_Ll,zl,lenght_screap_Bl,lenght_used_Bl,columnsw,rowsw,verticalw,lenght_used_Lw,lenght_used_Bw,lenght_screap_Lw,lenght_screap_Bw,zw,entire_row_width,entire_row_height,single_col_width,single_col_height,entire_row_widthl,entire_row_heightl,single_col_widthl,single_col_heightl,entire_row_widthl_screp,entire_row_heightl_screp,single_col_widthl_screp,single_col_heightl_screp,entire_row_widthw_screp,entire_row_heightw_screp,single_col_widthw_screp,single_col_heightw_screp,zw})

    }else{
      setarrother(false);
      toast.error('Invalid Input Value Please Check and Update', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const handleChange=(e)=>{
    if(e.target.name==='mainl'){setlengtho(e.target.value)}
    if(e.target.name==='mainw'){setwidtho(e.target.value)}
    if(e.target.name==='extractl'){setlengthc(e.target.value)}
    if(e.target.name==='extractw'){setwidthc(e.target.value)}
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Resizer | size extractor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
      </Head>

      <header className="text-gray-600 body-font one-edge-shadow">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <TbResize className='text-3xl'/>
            <span className="ml-3 text-3xl">Resize</span>
          </a>
          {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav> */}
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
      
      <div>
        <form onSubmit={calculate}>
        <div className="container pt-6 mx-auto">
          <div className="bg-white rounded-lg p-8 md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md shd">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Main board size : </h2>
            <div className='flex flex-col border-b-2 pb-4'>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Length / लंबाई</label>
                <input onChange={handleChange} value={lengtho} type="text" id="mainl" name="mainl" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Width / चौड़ाई</label>
                <input onChange={handleChange} value={widtho} type="text" id="mainw" name="mainw" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font mt-4">Extracted board size : </h2>
            <div className='flex flex-col'>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Length / लंबाई</label>
                <input onChange={handleChange} value={lengthc} type="text" id="extractl" name="extractl" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Width / चौड़ाई</label>
                <input onChange={handleChange} value={widthc} type="text" id="extractw" name="extractw" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Calculate</button> 
          </div>
        </div>
        </form>
      </div>
      
      {arrother.show && <div className={`flex flex-wrap -m-4 mt-8 container bg-white rounded-lg p-8 md:ml-auto w-full z-10 shadow-md shd my-6 mx-auto ${arrother.verticalw>arrother.horizontall?"bg-green-200":""}`}>
          <div className="md:w-2/5">
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">Vertical Cutting : </h2>
            <p>Main Board Length : {arrother.L}</p>
            <p>Main Board Bridth : {arrother.B}</p>
            <p>Cuting Board Length : {arrother.l}</p>
            <p>Cuting Board Bridth : {arrother.b}</p>
            <p>cuting pics inside the Length : {arrother.rowsw}</p>
            <p>cuting pics inside the Bridth : {arrother.columnsw}</p>
            <p>Total Pics : {arrother.verticalw} </p>
            <p>Bridth used : {arrother.lenght_used_Lw}</p>
            <p>Lenght used : {arrother.lenght_used_Bw}</p>
            <p>Remaining length : {arrother.lenght_screap_Bw}</p>
            <p>Remaining bridth : {arrother.lenght_screap_Lw}</p>
            <p>Pics from escrape : {arrother.zw}</p>
          </div>
          <div className="py-4 md:w-3/5 sm:w-full">
            
            {arrother.columnsw>0 && <div className='bg-slate-200 border-0 border-slate-400 relative layout-div'>
              {arrother.rowsw>0 && arrother.columnsw>=1 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height, float:"left"}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=2 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=3 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=4 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=5 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=6 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=7 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=8 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=9 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {arrother.rowsw>0 && arrother.columnsw>=10 && <div className='bg-white' style={{width:arrother.entire_row_width, height:arrother.entire_row_height}}>
                  {arrother.rowsw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
                  {arrother.rowsw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_width, height:"100%", float:"left"}}>
                    <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                    <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                  </div>}
              </div>}
              {/* // */}
              {arrother.zw>0 && <div className='bg-white absolute top-0' style={{width:arrother.entire_row_widthw_screp, height:arrother.entire_row_heightw_screp,right:"0%"}}>
                    {arrother.zw>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthw_screp, height:arrother.single_col_heightw_screp}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.zw>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthw_screp, height:arrother.single_col_heightw_screp}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.zw>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthw_screp, height:arrother.single_col_heightw_screp}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.zw>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthw_screp, height:arrother.single_col_heightw_screp}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.zw>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthw_screp, height:arrother.single_col_heightw_screp}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.zw>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthw_screp, height:arrother.single_col_heightw_screp}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.zw>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthw_screp, height:arrother.single_col_heightw_screp}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.zw>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthw_screp, height:arrother.single_col_heightw_screp}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.zw>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthw_screp, height:arrother.single_col_heightw_screp}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.zw>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthw_screp, height:arrother.single_col_heightw_screp}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
              {/* // */}
            </div>}
          </div>
          {/* <div className="p-4 md:w-2/5">
            <div className='bg-slate-100 w-full'>gfgggd</div>
          </div> */}
      </div>}

      {arrother.show && <div className={`flex flex-wrap -m-4 mt-8 container bg-white rounded-lg p-8 md:ml-auto w-full z-10 shadow-md shd my-6 mx-auto ${arrother.horizontall>arrother.verticalw?"bg-green-200":""}`}>
          <div className="md:w-2/5">
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">Horizontal Cutting : </h2>
            <p>Main Board Length : {arrother.L}</p>
            <p>Main Board Bridth : {arrother.B}</p>
            <p>Cuting Board Length : {arrother.l}</p>
            <p>Cuting Board Bridth : {arrother.b}</p>
            <p>cuting pics inside the Length : {arrother.rowsl}</p>
            <p>cuting pics inside the Bridth : {arrother.columnsl}</p>
            <p>Total Pics : {arrother.horizontall} </p>
            <p>Lenght_used : {arrother.lenght_used_Ll}</p>
            <p>Bridth_used : {arrother.lenght_used_Bl}</p>
            <p>Remaining length : {arrother.lenght_screap_Ll}</p>
            <p>Remaining bridth : {arrother.lenght_screap_Bl}</p>
            <p>Pics from escrape : {arrother.zl}</p>
          </div>
          <div className="py-4 md:w-3/5">
            {arrother.rowsl>0 && <div className='bg-slate-200 border-0 border-slate-400 layout-div'>
                {arrother.rowsl>0 && arrother.rowsl>=1 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                    {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=2 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=3 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=4 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=5 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=6 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=7 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=8 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=9 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {arrother.rowsl>0 && arrother.rowsl>=10 && <div className='bg-white' style={{width:arrother.entire_row_widthl, height:arrother.entire_row_heightl}}>
                {arrother.columnsl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                    {arrother.columnsl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.l}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.b}</span>
                    </div>}
                </div>}
                {/* entire_row_widthl_screp,entire_row_heightl_screp,single_col_widthl_screp,single_col_heightl_screp */}
                {/* {console.log(arrother.entire_row_widthl_screp,arrother.entire_row_heightl_screp)} */}
                {arrother.zl>0 && <div className='bg-white' style={{width:arrother.entire_row_widthl_screp, height:arrother.entire_row_heightl_screp}}>
                    {arrother.zl>=1 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.zl>=2 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.zl>=3 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.zl>=4 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.zl>=5 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.zl>=6 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.zl>=7 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.zl>=8 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.zl>=9 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                    {arrother.zl>=10 && <div className='bg-white box-shadow relative' style={{width:arrother.single_col_widthl_screp, height:"100%", float:"left"}}>
                      <span style={{position:"absolute", left:"5px",top:"49%" }}>{arrother.b}</span>
                      <span style={{position:"absolute", left:"50%"}}>{arrother.l}</span>
                    </div>}
                </div>}
            </div>}
          </div>
          {/* <div className="p-4 md:w-2/5">
            <Image src="/img.png" alt="Picture of the author" width={500} height={500}/>
          </div> */}
      </div>}
      
      <footer className={styles.footer}>  
          <p>Design & Devloped by&nbsp;<span className={styles.footer_font}>Gaurav Bhati</span></p>  
      </footer>
    </div>
  )
}
