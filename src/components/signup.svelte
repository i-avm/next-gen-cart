<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			Sign Up
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" action="#" method="POST">
			<div class="mb-4">
				<label class="block text-grey-darker text-sm font-bold mb-2" for="firstname">
					First name
				</label>
				<input
					class="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
					id="firstname"
					type="text"
					placeholder="First name"
				/>
			</div>
			<div class="mb-4">
				<label class="block text-grey-darker text-sm font-bold mb-2" for="secondname">
					Second name
				</label>
				<input
					class="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
					id="secondname"
					type="text"
					placeholder="Second name"
				/>
			</div>
			<div>
				<label for="email" class="block text-grey-darker text-sm font-bold mb-2">Email</label>
				<div class="mb-4">
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Email"
						autocomplete="email"
						required
						class="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<label for="password" class="block text-grey-darker text-sm font-bold mb-2"
						>Password</label
					>
				</div>
				<div class="mb-4">
					<input
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						autocomplete="current-password"
						required
						class="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="flex w-full justify-center rounded-full bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
					>Create account</button
				>
			</div>
		</form>

		<p class="mt-10 text-center text-sm text-black-500">
			<a href="/account/login" class="font leading-6 text-black-700 hover:text-black-600">Login</a>
		</p>
	</div>
</div>
