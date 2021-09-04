import React from "react";

import { Grid } from "@material-ui/core";

import { Page, Title, Image, TextImportant, Rappel } from "../../common";
import clovis from "./images/clovis.jpg";
import francois from "./images/francois-1er.jpg";
import louis16 from "./images/louis-xiv.jpg";
import napoleon from "./images/napoleon.png";

export default function PageRappel(props: any) {
  return (
    <Page>
      <Title rank={2}>Les différents régimes politiques de France depuis 1815</Title>
      <Rappel title="la révolution française.">
        <Title rank={3}>la révolution française</Title>
        <Grid container>
          <Grid item md={4}>
            <Image
              style={{ width: "30%", minWidth: "200px" }}
              src={clovis}
              title="Le baptême de Clovis"
              caption="Le baptême de Clovis"
            />
          </Grid>
          <Grid item md={5}>
            <p>Pendant des siècles, la France a été dirigée par des rois.</p>
          </Grid>

          <Grid item md={2}>
            <Image
              style={{ width: "30%", minWidth: "200px" }}
              src={francois}
              title={"François 1er"}
              caption="François 1er"
            />
          </Grid>
          <Grid item md={8}>
            <p>
              <br />À la fin du XVIII siècle, l'augmentation des prix, de mauvaises récoltes, des
              tensions entre le tiers état et les autres ordres (clergés et noblesse) poussent le
              peuple à se soulever. Ce soulèvement incite le roi de France, Louis XVI, à accepter
              d'écouter les plaintes du peuple. Ce sont les cahiers de doléances. Des états généraux
              sont convoqués sur ordre du roi et des réformes du régime sont envisagées.
            </p>

            <p>
              Après des négociations infructueuses entre les ordres, le peuple décide d'abolir le
              régime de <TextImportant>monarchie de absolue</TextImportant>. La France devient{" "}
              <TextImportant>une monarchie constitutionnelle</TextImportant> en 1791 puis{" "}
              <TextImportant>une République en 1792</TextImportant>.
            </p>
          </Grid>
          <Grid item md={4}>
            <Image
              style={{ width: "30%", minWidth: "200px" }}
              src={louis16}
              title={"Louis XIV"}
              caption="Louis XIV"
            />
          </Grid>
        </Grid>
        <Title rank={3}>La Première République</Title>
        <Grid container>
          <Grid item md={12}>
            <p>
              <TextImportant>Le roi Louis XVI est condamner à mort en 1793</TextImportant>.
              <br />À cette époque la France connaît de grands troubles. Des affrontements entre les
              partisans de la République et les partisans de la monarchie et même entre différents
              courants révolutionnaires rendent l'instauration de la République difficile. D'autres
              parts, les pays voisins de la France, comme la Grande Bretagne, l'Allemagne et
              l'Autriche sont en guerre contre la jeune République.
            </p>
          </Grid>

          <Grid item md={4}>
            <Image
              style={{ width: "30%", minWidth: "200px" }}
              src={napoleon}
              title={"Napoléon Bonaparte"}
              caption="Napoléon Bonaparte"
            />
          </Grid>
          <Grid item md={8}>
            <p>
              En 1799 le général Napoléon Bonaparte renverse le gouvernement en place (appelé le
              Directoire) et instaure <TextImportant>le Consulat</TextImportant> dont il se nomme
              premier consul.
              <br />
              Le 2 décembre 1804 Napoléon 1<sup>er</sup> est sacré empereur.
              <br />
              <TextImportant>La France passe alors sous le premier Empire</TextImportant>
            </p>

            <p>L'empire prend fin avec la défaite de Napoléon à Waterloo en 1815.</p>
          </Grid>
        </Grid>
      </Rappel>
    </Page>
  );
}
