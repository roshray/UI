import Image from 'next/image'
import { feedVideos } from './util/data'
export default function Home() {
  return (
    <div className="">
      {feedVideos.map(video =>(
        <div className="flex flex-col border-2 border-blue-500">
          <div className="">
               <Image 
                  src={video.thumbnailUrl} 
                  height={200} 
                  width={400} 
                  alt="thumbnail"
                />
          </div>
          <div className="flex gap-4">
            <div>
              <Image 
                src={video.channelImageUrl} 
                height={40} 
                width={40} 
                alt='channel image url'
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold">{video.title}</span>
              <div>
                <span>{video.channelName}</span>
                <div>
                  <span>{video.viewCount}</span>
                  <span>dot</span>
                  <span>{video.createdAt.toDateString()}</span>
                </div>
              </div>
            </div>
          </div>
         

        </div>
      ) )}
    </div>
  )
}
