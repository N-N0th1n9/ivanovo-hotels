import {FC} from "react";
import {FeedbacksInfo} from "@/interfaces/content.interfaces";

interface FeedbackProps {
  borderColor: string
  feedbackInfo: FeedbacksInfo
}

const FeedbackBlock: FC<FeedbackProps> = ({borderColor, feedbackInfo}) => {
  return (
      <div className='max-w-[640px] h-[650px] 2xl:h-[600px] xl:h-[550px] sm:h-[400px] 600px:h-[483px] border-[1px]
      text-2xl 2xl:text-xl xl:text-base xs:text-[14px] font-light shadow-2xl 600px:shadow-xl z-10 rounded-xl overflow-hidden'
           style={{borderColor: borderColor}}>
        <div className='border-b' style={{borderColor: borderColor}}>
          <div className='py-[28px] lg:py-6 md:py-4 sm:py-3 px-6 lg:px-5 md:px-3 sm:px-2 font-medium 600px:text-base'>
            <img src="/icons/stars.svg" alt="" className='h-[26px] md:h-5 600px:h-[14px]'/>
            {feedbackInfo.name}
          </div>
        </div>
        <div className='py-[28px] lg:py-6 md:py-4 sm:py-3 px-6 lg:px-5 md:px-3 sm:px-2'>
          {feedbackInfo.text}
        </div>
      </div>
  );
};

export default FeedbackBlock;