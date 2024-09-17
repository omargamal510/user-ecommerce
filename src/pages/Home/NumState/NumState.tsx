import { NumStateProps } from "../../../types/home";

function NumState({ title, mainTitle, imgSrc }: NumStateProps) {
  return (
    <>
      <div className="num-stats h-44 col-span-12 md:col-span-6 xl:col-span-3 flex items-center justify-center rounded-lg bg-white shadow-home-element">
        <div className="flex items-center justify-between w-full px-6 py-8 gap-4">
          <div className="flex flex-col gap-4">
            <h4 className="text-textSecondary uppercase font-semibold text-xs">
              {title}
            </h4>
            <h2 className="text-textPrimary font-bold text-3xl">{mainTitle}</h2>
          </div>
          <div>
            <img className="w-[64px] h-[64px]" src={imgSrc} alt={imgSrc} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NumState;
