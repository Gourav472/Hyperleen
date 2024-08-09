import React, {useRef, useState } from 'react';
import CommonHeading from '../common/CommonHeading';
import CommonBtn from '../common/CommonBtn';
import CommonBtnWhite from '../common/CommonBtnWhite';
import projectOverview from '../assets/images/webp/project_overview.webp';
import loremFirst from '../assets/images/webp/lorem_first.webp';
import loremSecond from '../assets/images/webp/lorem_second.webp';
import inputFileBg from '../assets/images/webp/input_file_bg.webp';
import Icons from '../common/Icons';
const AddLabel = () => {
    const [preview, setPreview] = useState(inputFileBg);
    const [fileName, setFileName] = useState('Car.');
    const fileInputRef = useRef(null);
    const HANDLE_FILE_CHANGE = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    const HANDLE_CANCEL = () => {
        setFileName('Car.');
        setPreview(inputFileBg);
        fileInputRef.current.value = null;
    };
    return (
        <div id='label' className='container relative z-20'>
            <div className='pt-2 sm:pt-4 md:pt-6 lg:pt-12 pb-14 sm:pb-16 md:pb-20 lg:pb-32 xl:pb-[160px] xl:pt-[79px]'>
                <div className='flex flex-wrap flex-row'>
                    <div data-aos="fade-right" className='w-full flex justify-center lg:w-5/12'>
                        <div className='flex flex-col'>
                            <CommonHeading className="max-lg:text-center lg:max-w-[478px]" text="Add" blueText="Label" blackText="of an Image"/>
                            <p className='gray font-poppins font-normal text-base leading-6 pt-4'>
                                Efficient and Accurate Labeling on Image.
                            </p>
                            <div className='max-w-[462px] bg-white p-4 sm:p-5 w-full md:min-h-[477px] rounded-2xl border-[0.5px] border-darkBlue mt-6 flex flex-col'>
                                <p className='text-black font-poppins font_gilroy_semibold text-base leading-6'>
                                    Upload Image and add label
                                </p>
                                <div className='max-w-[422px] p-5 min-h-[205px] w-full bg-offGray rounded-xl mt-4 sm:mt-5'>
                                    <label className="relative flex items-center justify-center w-full max-w-[382px] min-h-[165px] cursor-pointer bg-cover bg-center border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400"
                                        style={{
                                            backgroundImage: `url(${preview})`,
                                        }}>
                                        <input type="file" className="hidden" onChange={HANDLE_FILE_CHANGE} ref={fileInputRef} />
                                    </label>
                                </div>
                                <div className='max-w-[422px] p-3 min-h-[50px] sm:min-h-[60px] md:min-h-[70px] lg:min-h-[81px] rounded-xl border-[0.5px] border-gray mt-4'>
                                    <p className='opacity-40 font-poppins font-normal text-base leading-6 text-black flex items-center'>
                                        {fileName} {preview === inputFileBg && <Icons iconName="PenIcon" className="ms-1"/>}
                                    </p>
                                </div>
                                <div className='flex items-center justify-center gap-4 pt-5 lg:pt-9'>
                                    <CommonBtn
                                        text="Ok"
                                        className="max-sm:max-w-[120px] max-md:max-w-[150px] md:max-w-[203px] w-full"
                                        onClick={HANDLE_CANCEL}
                                    />
                                    <CommonBtnWhite
                                        text="Cancel"
                                        className="max-sm:max-w-[120px] max-md:max-w-[150px] md:max-w-[203px] w-full"
                                        onClick={HANDLE_CANCEL}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className='w-full lg:w-7/12 flex max-lg:mt-12 justify-center lg:justify-end lg:items-end lg:ps-6 xl:ps-0'>
                        <div className='max-w-[600px] w-full min-h-[470px] sm:min-h-[495px] relative'>
                            <img className='pointer-events-none shadow-6xl rounded-2xl max-w-[399px] w-full mt-8' src={projectOverview} alt="overview" />
                            <img className='absolute right-0 top-0 pointer-events-none max-w-[191px] w-full rounded-2xl shadow-7xl h-[241px]' src={loremFirst} alt="lorem" />
                            <img className='pointer-events-none absolute bottom-0 w-full shadow-8xl right-0 rounded-2xl max-w-[353px]' src={loremSecond} alt="lorem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddLabel;
