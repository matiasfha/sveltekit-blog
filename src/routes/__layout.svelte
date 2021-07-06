<script>
	import '../app.postcss';
</script>

<header class="w-full h-32 py-8 px-4 border-b border-solid border-gray-300">
	<div class="mx-auto max-w-6xl">
		<h1 class="h-14 font-bold text-3xl text-left">Your brand</h1>

		<nav class="w-full sticky">
			<ul class="list-none h-9 flex flex-row items-center justify-items-start">
				<li class="pr-4"><a href="/">Home</a></li>
				<li class="px-4">Blog</li>
				<li class="px-4">About</li>
			</ul>
		</nav>
	</div>
</header>
<main class="py-2"><slot /></main>
<footer class="h-80">
	<section class="h-72 bg-gray-100">
		<div class="grid grid-cols-2 gap-12 mx-auto max-w-6xl pt-24">
			<div class="flex flex-col items-start justify-between">
				<h2 class="text-xl text-gray-900 font-bold">Subscribe to the newsletter</h2>
				<p class="text-base text-gray-400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at
					quae omnis pariatur obcaecati possimus nisi ea iste!
				</p>
			</div>
			<div class="flex items-center justify-around">
				<input
					type="email"
					placeholder="Enter your email"
					class="h-12 px-5 rounded-3xl shadow-md text-base text-gray-800 w-96"
				/>
				<button
					class="px-2 flex flex-row justify-around items-center  rounded-3xl bg-gray-900 text-white h-12 w-24 hover:bg-gray-700 hover: animate-pulse"
					>Submit
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 5l7 7-7 7M5 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		</div>
	</section>
	<section class="text-center py-2 text-sm">
		Copyright ©2021 All rights reserved | This template is made with by Me ❤️
	</section>
</footer>
