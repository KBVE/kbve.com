//!     KBVE Search Module
//?     The Search Module will grab the data points from each instance.
//*     [IMPORT]
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { elementButtonClick } from '@lib/tools';
import { HiOutlineSearchCircle } from 'react-icons/hi';


const SearchOption = (query) => [
	{
		url: `/search?q=${query}+site:reddit.com`,
		name: '+Reddit',
		tag: 'site',
	},
	{
		url: `/search?q=${query}+site:stackoverflow.com`,
		name: '+StackOverFlow',
		tag: 'site',
	},
	{
		url: `https://duckduckgo.com/?q=${query}&kp=-1&kl=us-en`,
		name: '@DuckDuckGo',
		tag: 'engine',
	},
	{
		url: `https://you.com/search?q=${query}&tbm=youchat&cfr=chat`,
		name: '@YOU',
		tag: 'engine',
	},
	{
		url: `http://ecosia.org/search.php?q=${query}`,
		name: '@Ecosia',
		tag: 'engine',
	},
	{
		url: `https://yep.com/web?q=${query}`,
		name: '@Yep',
		tag: 'engine',
	},
];

const ToolWrap = ({ query, tag }) => {
	return SearchOption(query).map((e) => {
		if (e.tag === tag)
			return (
					<div key={e.url}>{elementButtonClick(e.url, e.name)}</div>
			
			);
	});
};

const SearchBar = ({query}) => {
	return (
		<>
			<div className="relative flex w-full flex-wrap items-stretch pb-4">
				<form
					className="sm:w-1/2 md:w-full"
					method="get"
					action="/search/"
					target="_blank"
				>
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
					>
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-purple-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
                <title>Search</title>
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
						</div>
						<input
							type="search"
							id="default-search"
							name="q"
							className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
							placeholder="Search Everything!"
							defaultValue={query}
							required
						/>
						<button
							type="submit"
							className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-pink-500 to-purple-700 hover:grayscale ease-in-out focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
						>
							Search
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

const SearchData = ({ dork = '' }) => {
	//TODO  Under settings add more dorks for Google, to refine and make searching easier.

	//*     [DATA]
	const [query, setQuery] = useState(null);
	//const [se, setEngine] = useState(engine);

	//*     [useEffect]
	useEffect(() => {
		const sanitizeData = async () => {
			const url = new URL(window.location.href);
			const searchParams = url.searchParams;
			const clean = DOMPurify.sanitize(searchParams.get('q'), {
				USE_PROFILES: { html: false, mathMl: false, svg: false },
			});
			setQuery(clean);
		};
		sanitizeData();
	}, []);

	if (query) {
		return (
			<>
				<div className="flex flex-wrap space-x-2">
					<ToolWrap query={query} tag={'site'} />
				</div>
        <div className="flex flex-row">
           <SearchBar query={query} />
        </div>
			</>
		);
	}
};

export default SearchData;
