import Grid from "@material-ui/core/Grid";
import { Page, Title, Image, TextImportant, Question, Information } from "../../common";
import napoleon3 from "./images/napoleon3.jpg";

export default function Partie2(props: any) {
  return (
    <Page>
      <Title rank={2}>La Deuxième République</Title>
      <Grid container>
        <Grid item md={12}>
          <p>
            La <TextImportant>Deuxième République</TextImportant> est instaurée le jour de
            l'abdication de Louis-Philippe 1<sup>er</sup>.
          </p>
          <p>
            La Deuxième République a instauré en France le suffrage universel masculin. L'esclavage
            est à nouveau aboli (il avait été remis en place en 1804 sous Napoléon 1<sup>er</sup>
            ).
          </p>
        </Grid>
        <Grid item md={4}>
          <Image
            style={{ width: "30%", minWidth: "200px" }}
            src={napoleon3}
            title={"Louis-Napoléon Bonaparte"}
            caption="Louis-Napoléon Bonaparte dit Napoléon III"
          />
        </Grid>
        <Grid item md={8}>
          <p>
            <TextImportant>Louis-Napoléon Bonaparte</TextImportant> , le neveux de{" "}
            <strong>
              Napoléon 1<sup>er</sup>
            </strong>
            , est élu président en 1848.
          </p>
          <p>
            Le 2 décembre 1851, Louis-Napoléon Bonapart fait un coup d'état. Il prend le pouvoir
            dans le pays et se fait nommer empereur l'année d'après le{" "}
            <TextImportant>2 décembre 1852 sous le nom de Napoléon III</TextImportant>.
          </p>
          <p>
            Cette période est appelée <TextImportant>Le Second Empire</TextImportant>.
          </p>
        </Grid>
      </Grid>
      <Title rank={2}>Le Second Empire</Title>
      <Grid container>
        <Grid item md={8}>
          <p>Napoléon III dirige le Second empire de 1852 à 1870.</p>
          <p>
            Après à une défaite de l'empereur face à l'armée de Prusse où il se fait capturer,
            l'empire s'effondre.
            <br />
            Le palais Bourbon (où siège le Corps législatif) est envahi par une foule d'émeutiers et{" "}
            <TextImportant>la Troisième République est proclamée le 4 septembre 1870</TextImportant>
            .
          </p>
        </Grid>
        <Grid item md={4}>
          <Question title="le sais-tu ?">
            C'est quoi la différence entre un roi, un empereur et un président ?
          </Question>
        </Grid>
      </Grid>
      <Title rank={2}>La Troisième République</Title>
      <Grid container>
        <Grid item md={5}>
          <Information title="Réponse">
            La différence entre un roi, un empereur et un président&nbsp;:
            <p>
              Un roi est le chef d'un pays (un royaume) et il hérite généralement de ce titre à la
              naissance.
            </p>
            <p>L'empereur lui, dirige plusieurs états réunis dans un même empire.</p>
            <p>
              Le président, contrairement aux autres est élu pour gouverner un pays pendant une
              durée limitée.
            </p>
          </Information>
        </Grid>
        <Grid item md={7}>
          <p>
            C'est à partir de cette république que le régime c'est stabilisé.
            <br />
            Le premier président de la Troisième République était{" "}
            <TextImportant>Adolphe Thiers</TextImportant>.
            <br />
            Sous la Troisième République{" "}
            <TextImportant>
              l'école est devenue gratuite, laïque et obligatoire en 1881-1882
            </TextImportant>
            .<br />
            Durant cette période,{" "}
            <TextImportant>la liberté de la presse et la liberté de réunion</TextImportant> sont
            accordées.
            <br />
            <TextImportant>
              La loi de séparation entre l'Église est l'État est adopté en 1905
            </TextImportant>
            .
          </p>
          <p>
            La France sera sous le régime de la Troisième République jusqu'à la{" "}
            <strong>Seconde Guerre Mondiale</strong> où elle sera remplacée par{" "}
            <TextImportant>le Régime de Vichy en 1940</TextImportant>.
          </p>
        </Grid>
      </Grid>
    </Page>
  );
}
