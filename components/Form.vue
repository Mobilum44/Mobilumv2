<template>
	<div class="Form">
		<form @submit.prevent="sendEmail">
			<label for="name">Nom & prénom</label>
			<input type="text" id="bame" name="name" placeholder="Votre nom et prénom" v-model="form.name" />

			<label for="sujet">Sujet</label>
			<input type="text" id="sujet" name="sujet" v-model="form.subject" placeholder="L'objet de votre message" />

			<label for="subject">Message</label>
			<textarea
				id="subject"
				name="subject"
				v-model="form.message"
				placeholder="Votre message"
				style="height: 200px"
			></textarea>

			<button type="submit">{{ btnText }}</button>
		</form>
	</div>
</template>

<script lang="ts" setup>
interface Form {
	name: string;
	subject: string;
	message: string;
}

const btnText = ref("Envoyer");
const mobilumMail = "contact@mobilum-france.com";

const form = reactive<Form>({
	name: "",
	subject: "",
	message: "",
});

function sendEmail(): void {
	window.open(`mailto:${mobilumMail}?subject=${form.subject}&body=${form.message}`);
	btnText.value = "Message envoyé !";
	form.message = "";
	form.name = "";
	form.subject = "";
}
</script>

<style scoped>
.Form {
	border-radius: 8px;
	border: 1px solid #ccc;
	background-color: #f5ebe0;
	box-sizing: border-box;
	padding: 1rem;
	height: 100%;
	max-height: 100%;
	width: 80%;
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

button[type="submit"] {
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

button[type="submit"]:hover {
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
