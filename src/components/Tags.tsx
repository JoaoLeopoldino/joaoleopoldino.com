import Link from 'next/link';

import { ITag } from '@/typings';

export function Tags({ tags }: { tags?: ITag[] }) {
  return (
    <div className="flex flex-wrap w-full">
      {tags &&
        tags.map((tag) => (
          <Link href={`/blog/tag/${tag.slug}`} key={tag.slug}>
            <a className="mr-2 text-sm md:text-base font-medium  text-gray-700 hover:text-active  dark:text-gray-400  ease-in-out transition-all duration-150 lowercase">{`#${tag.title}`}</a>
          </Link>
        ))}
    </div>
  );
}
