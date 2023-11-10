<template>
	<div class="Form">
		<form @submit.prevent="sendMail" ref="formElement">
			<div>
				<label for="firstname">Votre prénom <sup>*</sup></label>
				<input
					type="text"
					id="firstname"
					name="firstname"
					v-model="form.firstname"
					placeholder="Votre prénom"
					required
					minlength="2"
					maxlength="64"
				/>
			</div>
			<div>
				<label for="lastname">Votre nom <sup>*</sup></label>
				<input
					type="text"
					id="lastname"
					name="lastname"
					v-model="form.lastname"
					placeholder="Votre nom"
					required
					minlength="2"
					maxlength="64"
				/>
			</div>
			<div>
				<label for="company">Votre entreprise <sup>*</sup></label>
				<input
					type="text"
					id="company"
					name="company"
					v-model="form.company"
					placeholder="Votre entreprise"
					required
					minlength="2"
					maxlength="64"
				/>
			</div>
			<div>
				<label for="email">Votre email <sup>*</sup></label>
				<input type="email" id="email" name="email" v-model="form.email" placeholder="Votre email" required />
			</div>
			<div>
				<label for="phone">Votre téléphone</label>
				<input type="tel" id="phone" name="phone" v-model="form.phone" placeholder="+33(0)2 51 72 90 22" />
			</div>
			<div>
				<label for="subject">Votre requête <sup>*</sup></label>
				<input
					type="text"
					id="subject"
					name="subject"
					v-model="form.subject"
					placeholder="L'objet de votre message"
					minlength="10"
					maxlength="128"
					required
				/>
			</div>
			<div>
				<label for="message">Votre message <sup>*</sup></label>
				<textarea
					id="message"
					name="message"
					v-model="form.message"
					placeholder="Votre message"
					style="height: 200px"
					required
					minlength="10"
					maxlength="1024"
				></textarea>
			</div>
			<div class="h-captcha" data-captcha="true" ref="captcha"></div>

			<button type="submit" :disabled="isDisabled">{{ btnText }}</button>
		</form>
	</div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

interface Form {
	firstname: string;
	lastname: string;
	company: string;
	phone: string;
	email: string;
	subject: string;
	message: string;
}

const btnText = ref("Envoyer");
const formElement = ref<HTMLFormElement>();
const form = reactive<Form>({
	firstname: "",
	lastname: "",
	phone: "",
	email: "",
	company: "",
	subject: "",
	message: "",
});
const isDisabled = computed(() => {
	return !form.firstname || !form.lastname || !form.company || !form.subject || !form.message;
});

useHead({
	script: [
		{
			src: "https://web3forms.com/client/script.js",
			async: true,
			defer: true,
			tagPosition: "bodyClose",
		},
	],
});

async function sendMail(): Promise<void> {
	const hCaptcha = formElement.value?.querySelector("textarea[name=h-captcha-response]") as HTMLTextAreaElement;

	if (!hCaptcha || !hCaptcha.value) {
		alert("Veuillez remplir le captcha !");
		return;
	}
	try {
		await $fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: { "Content-Type": "application/json", Accept: "application/json" },
			body: JSON.stringify({
				...form,
				access_key: config.public.formToken,
			}),
		});
		btnText.value = "Mail envoyé !";
	} catch (err) {
		alert(`Une erreur est survenue lors de l'envoi du mail : ${err}`);
	} finally {
		console.log("Mail sent");
		form.company = "";
		form.firstname = "";
		form.lastname = "";
		form.phone = "";
		form.email = "";
		form.subject = "";
		form.message = "";
	}
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
input[type="email"],
input[type="tel"] {
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
	font-family: "Roboto", sans-serif;
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
	cursor: pointer;
}

button[type="submit"]:hover {
	background-color: rgba(26, 148, 157);
	box-shadow: none;
}

button[type="submit"]:disabled {
	background-color: rgba(26, 148, 157, 0.5);
	box-shadow: none;
	cursor: not-allowed;
}

@media only screen and (max-width: 950px) {
	.Form {
		margin: 0;
		width: 100%;
	}
}
</style>
