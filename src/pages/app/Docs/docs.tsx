import { Cards } from './cards'

export function Docs() {
  return (
    <div>
      <div className="mb-14 flex flex-col items-center justify-center gap-2">
        <h2 className="text-4xl font-bold">Documentações Importantes</h2>
        <p className="text-xl font-semibold">
          Recursos úteis para seu dia a dia!
        </p>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-7 gap-y-16">
          <div>
            <iframe
              width="390"
              height="220"
              src="https://www.youtube.com/embed/yd1JhZzoS6A?si=U1ume1Knyp8YMFbp"
              title="Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="mt-1 w-[390px] text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <iframe
              width="390"
              height="220"
              src="https://www.youtube.com/embed/XZmGGAbHqa0?si=8dy8FxHxbEE8IoU5"
              title="Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="mt-1 w-[390px] text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div>
            <iframe
              width="390"
              height="220"
              src="https://www.youtube.com/embed/cstnNg1_oRo?si=goeDdZyKxeu9J6qk"
              title="Video 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="mt-1 w-[390px] text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div>
            <iframe
              width="390"
              height="220"
              src="https://www.youtube.com/embed/YNEiYUxNRsE?si=H_kqkUSnSbiVWwor"
              title="Video 4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="mt-1 w-[390px] text-xl font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  )
}
