<template>
	<div class="Villes">
		<div class="messagedefilant">
			<div>
				<span>
					Paris Marseille Lyon Toulouse Nice Nantes Montpellier Strasbourg Bordeaux Lille Rennes Reims
					Saint-Étienne Toulon Le Havre Grenoble Dijon Angers Nîmes Saint-Denis (La Réunion) Villeurbanne
					Clermont-Ferrand Le Mans Aix-en-Provence Brest Tours Amiens Limoges
					<!-- </span>
        <span> -->
					Annecy Perpignan Boulogne-Billancourt Orléans Metz Besançon Saint-Denis Argenteuil Rouen Montreuil
					Mulhouse Caen Saint-Paul Nancy Tourcoing Roubaix Nanterre Vitry-sur-Seine Avignon Créteil Poitiers
					Dunkerque Aubervilliers Versailles Aulnay-sous-Bois Asnières-sur-Seine
					<!-- </span>
        <span> -->
					Colombes Saint-Pierre Courbevoie Fort-de-France Cherbourg-en-Cotentin Le Tampon Rueil-Malmaison
					Champigny-sur-Marne Béziers Pau La Rochelle Saint-Maur-des-Fossés Calais Cannes Antibes Drancy
					Ajaccio Mérignac Saint-Nazaire Colmar Issy-les-Moulineaux
				</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.messagedefilant {
	display: flex;
	flex-wrap: wrap;
	/* margin: 40px auto; */
	padding: 0;
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 60px;
	font-family: "Bebas Neue";
}

.messagedefilant div {
	position: absolute;
}

.messagedefilant div span,
.messagedefilant div:after {
	position: relative;
	display: inline-block;
	font-size: 2rem;
	white-space: nowrap;
	top: 0;
}

.messagedefilant div span {
	animation: defilement 100s infinite linear;
}

.messagedefilant div:after {
	position: absolute;
	top: 0;
	left: 0;
	content: attr(data-text);
	animation: defilement2 10s infinite linear;
	background: #edc;
}

@keyframes defilement {
	0% {
		margin-left: 0;
	}
	100% {
		margin-left: -100%;
	}
}

@keyframes defilement2 {
	0% {
		margin-left: 100%;
	}
	100% {
		margin-left: 0%;
	}
}
</style>
