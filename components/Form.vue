<template>
	<div class="Form">
		<form action="/action_page.php">
			<label for="fname">Nom & prénom</label>
			<input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom" />

			<label for="sujet">Sujet</label>
			<input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message" />

			<label for="emailAddress">Email</label>
			<input id="emailAddress" type="email" name="email" placeholder="Votre email" />

			<label for="subject">Message</label>
			<textarea id="subject" name="subject" placeholder="Votre message" style="height: 200px"></textarea>

			<input type="submit" value="Envoyer" />
		</form>
	</div>
</template>

<style scoped>
.Form {
	border-radius: 8px;
	border: 1px solid #ccc;
	background-color: #f5ebe0;
	box-sizing: border-box;
	padding: 1rem;
	height: 100%;
	max-height: 100%;
	width: 70vh;
	margin: 1rem;
}

label {
	font-family: "Bebas Neue";
	letter-spacing: 1px;
	font-size: 1rem;
	display: flex;
	justify-content: left;
	margin-left: 1rem;
}

input[type="text"],
textarea,
input[type="email"] {
	width: 100%;
	padding: 12px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	margin-top: 6px;
	margin-bottom: 16px;
	margin-right: 0px;
	margin-left: 0px;
	resize: vertical;
	background-color: #fefcf3;
}

input[type="submit"] {
	border: 0;
	height: 36px;
	max-width: max-content;
	background-color: rgba(26, 148, 157);
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	border-radius: 8px;
	font-family: "Bebas Neue";
	letter-spacing: 2px;
	font-size: 1rem;
	text-decoration: none;
	color: white;
	line-height: 0;
	margin: 0.6em 0;
	font-size: 1rem;
	padding: 0 1.3em;
}

input[type="submit"]:hover {
	background-color: rgba(26, 148, 157);
	box-shadow: none;
}

@media only screen and (max-width: 950px) {
	.Form {
		margin: 0;
		width: 100%;
	}
}
</style>
