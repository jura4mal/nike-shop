/* eslint-disable @typescript-eslint/restrict-template-expressions */
interface ClassDictionary {
  [name: string]: boolean | null | undefined;
}

type ClassValue = string | ClassDictionary;

export const classnames = (...args: ClassValue[]) => {
  let classNames = '';

  for (let i = 0; i < args.length; i += 1) {
    const className = args[i];
    // eslint-disable-next-line no-continue
    if (!className) continue;

    if (typeof className === 'string') {
      classNames += ` ${args[i]}`;
    }
    if (typeof className === 'object') {
      const obj = args[i] as ClassDictionary;
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      Object.keys(obj).forEach((cn) => {
        if (obj[cn]) {
          classNames += ` ${cn}`;
        }
      });
    }
  }

  return classNames.trim();
};
