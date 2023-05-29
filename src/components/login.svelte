<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
			Login
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" action="#" method="POST">
			<div>
				<label for="email" class="block text-grey-darker text-sm font-bold mb-2">Email</label>
				<div class="mb-4">
					<input
						id="email"
						name="email"
						type="email"
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
						autocomplete="current-password"
						required
						class="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div class="text-sm">
					<a href=" " class="font leading-6 text-black-700 hover:text-black-600">Forgot password?</a
					>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="flex w-full justify-center rounded-full bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
					>Login</button
				>
			</div>
		</form>

		<p class="mt-10 text-center text-sm text-black-500">
			<a href="/account/register" class="font leading-6 text-black-700 hover:text-black-600"
				>Sign up</a
			>
		</p>
	</div>
</div>
