import React from "react";
import { Grid } from "@material-ui/core";

import { Page, Title, Image, TextImportant } from "../../common";
import charles10 from "./images/charles-x.jpg";
import louis18 from "./images/louis-xviii.jpg";
import louisPhi from "./images/louis-phi.jpg";
import revolution2 from "./images/revolution2.jpg";

export default function Partie1(props: any) {
  return (
    <Page>
      <Title rank={2}>La Restauration</Title>
      <Grid container>
        <Grid item md={4}>
          <Image
            style={{ width: "30%", minWidth: "200px" }}
            src={louis18}
            title={"Louis XVIII"}
            caption="Louis XVIII"
          />
        </Grid>
        <Grid item md={4}>
          <p>
            Suite à la défaite de Napoléon 1er, la fin du premier Empire est déclarée. La France
            redevient une monarchie constitutionnelle. Le roi Louis XVIII gouverne le pays de 1815 à
            1824, puis Charles X monte sur le trône. <br /> Ces deux rois étaient les frères de
            Louis XVI
          </p>
        </Grid>
        <Grid item md={4}>
          <Image
            style={{ width: "30%", minWidth: "200px" }}
            src={charles10}
            title={"Charles X"}
            caption="Charles X"
          />
        </Grid>
      </Grid>
      <Title rank={2}>La monarchie de Juillet</Title>
      <Grid container>
        <Grid item md={12}>
          <p>
            À partir de 1830, une deuxième révolution a lieu en France. Cette période s'appelle{" "}
            <TextImportant>la monarchie de Juillet</TextImportant> parce qu'elle commence avec de
            violentes émeutes qui ont lieu en juillet 1830.
          </p>
        </Grid>
        <Grid item md={12}>
          <Image
            style={{ minWidth: "200px" }}
            imgStyle={{ width: "100%", objectFit: "cover", overflow: "hidden" }}
            src={revolution2}
            title={"La Liberté guidant le peuple"}
            caption="La Liberté guidant le peuple d'Eugène Delacroix"
          />
        </Grid>
        <Grid item md={12}>
          <p>
            Cette révolution dura trois journées, les{" "}
            <TextImportant>27, 28 et 29 juillet 1830</TextImportant>. Elle est aussi connue sous le
            nom des <TextImportant>Trois glorieuses</TextImportant>. À la suite de cette révolution,
            le roi Charles X est destitué et{" "}
            <TextImportant>une nouvelle monarchie constitutionnelle</TextImportant> est instaurée.
          </p>
        </Grid>
        <Grid item md={8}>
          <p>
            <strong>
              Louis-Philippe 1<sup>er</sup> est nommé roi de la monarchie de Juillet.
            </strong>
            <br />
            Ce régime durera en France jusqu'en 1848. C'est cette année qu'une nouvelle révolution
            éclate. Le roi Louis-Philippe abdique le <TextImportant>24 février 1848</TextImportant>.
          </p>
        </Grid>
        <Grid item md={4}>
          <Image
            style={{ width: "30%", minWidth: "200px" }}
            src={louisPhi}
            title={"Louis-Philippe 1er"}
            caption={
              <span>
                Louis-Philippe 1<sup>er</sup>
              </span>
            }
          />
        </Grid>
      </Grid>
    </Page>
  );
}
