import React, { useState } from "react";

import { Theme } from "@material-ui/core/styles";
import { Grid, Card, Box, makeStyles } from "@material-ui/core";

import { Page, Title, Image, TextImportant } from "../../../common";
import louis6 from "../images/louis-vi.jpg";
import louis18 from "../images/louis-xviii_2.jpg";
import bastille from "../images/bastille.jpg";
import procesLouis from "../images/proces-louis.jpg";
import empereur from "../images/empereur.jpeg";
import monarchieJuillet from "../images/monarchie-juillet.jpg";
import sermentNapoleon3 from "../images/serment-napoleon3.jpg";
import sacreNapoleon3 from "../images/sacre-napoleon3.jpg";
import republique3 from "../images/republique3.jpg";
import petain from "../images/petain.jpg";

import Stepper from "./Stepper";

function resumeSteps(): { label: string; fragment: React.ReactFragment }[] {
  return [
    {
      label: "Vème siècle",
      fragment: (
        <React.Fragment>
          <Card
            style={{
              padding: "1rem",
            }}
          >
            <Title rank={3}>Le royaume de France</Title>
            <Grid container>
              <Grid item md={8}>
                <p>
                  La France est une monarchie absolue.
                  <br />
                  Elle est dirigée par des rois qui le plus souvent hérite de ce titre.
                </p>
                <p>
                  Cette période dure pendant plus de mille ans et connaît beaucoup d'évolutions dans
                  la société, mais pas de changement de régime.
                </p>
              </Grid>
              <Grid item md={4}>
                <Image
                  imgStyle={{ width: "100%", objectFit: "contain", overflow: "hidden" }}
                  src={louis6}
                  title="Louis VI"
                  caption="Louis VI roi de France"
                />
              </Grid>
            </Grid>
          </Card>
        </React.Fragment>
      ),
    },
    {
      label: "1789",
      fragment: (
        <React.Fragment>
          <Card
            style={{
              padding: "1rem",
            }}
          >
            <Title rank={3}>La Révolution Française</Title>
            <Grid container>
              <Grid item md={4}>
                <Image
                  imgStyle={{ width: "100%", objectFit: "contain", overflow: "hidden" }}
                  src={bastille}
                  title="Prise de la bastille"
                  caption="Prise de la bastille 1789"
                />
              </Grid>
              <Grid item md={8}>
                <p>
                  Le peuple se révolte et prend la bastille le 14 juillet 1789. Le régime
                  monarchique est réformé pour devenir une monarchie constitutionnelle en 1791.
                </p>
                <p>
                  En 1792, le peuple décide d'abolir la monarchie et d'instaurer la Première
                  République{" "}
                </p>
              </Grid>
            </Grid>
          </Card>
        </React.Fragment>
      ),
    },
    {
      label: "1792",
      fragment: (
        <React.Fragment>
          <Card
            style={{
              padding: "1rem",
            }}
          >
            <Title rank={3}>La Première République</Title>
            <Grid container>
              <Grid item md={8}>
                <p>
                  Le roi est jugé devant <strong>la Convention Nationale en 1792</strong>.<br />
                  <strong>Louis XVI est condamné à mort puis exécuté en 1793</strong>.
                  <br />
                  Au cours des années suivantes la République fait face à des conflits internes et
                  externes
                </p>
                <p>
                  <strong>Napoléon Bonaparte renverse le Gouvernement en 1799</strong> et prend le
                  pouvoir en tant que premier consul.
                </p>
              </Grid>
              <Grid item md={4}>
                <Image
                  src={procesLouis}
                  title="Procès de Louis XVI"
                  caption="Procès de Louis XVI en 1792"
                />
              </Grid>
            </Grid>
          </Card>
        </React.Fragment>
      ),
    },
    {
      label: "1804",
      fragment: (
        <React.Fragment>
          <Card
            style={{
              padding: "1rem",
            }}
          >
            <Title rank={3}>Le Premier Empire</Title>
            <Grid container>
              <Grid item md={4}>
                <Image
                  style={{ overflow: "hidden" }}
                  imgStyle={{ width: "100%", objectFit: "cover" }}
                  src={empereur}
                  title="Napoléon 1er"
                  caption={
                    <span>
                      Napoléon 1<sup>er</sup>
                    </span>
                  }
                />
              </Grid>
              <Grid item md={8}>
                <p>
                  <strong>Napoléon Bonaparte se couronne empereur en 1804</strong>.
                </p>
                <p>
                  Napoléon 1<sup>er</sup> dirige le pays jusqu'en 1815. Il sera vaincu à la bataille
                  de Waterloo part une armée réunissant la Grande Bretagne, l'Allemagne et les
                  Pays-Bas.
                </p>
                <p>
                  Après cet échec, Napoléon est envoyé en exile sur l'ile de Sainte-Hélène, dans
                  l'océan pacifique à plus de 1800km des côtes de Namibie sur le continent africain.
                </p>
              </Grid>
            </Grid>
          </Card>
        </React.Fragment>
      ),
    },
    {
      label: "1815",
      fragment: (
        <React.Fragment>
          <Card
            style={{
              padding: "1rem",
            }}
          >
            <Title rank={3}>La Restauration</Title>
            <Grid container>
              <Grid item md={8}>
                <p>
                  <strong>La France redevient une monarchie en 1815</strong>.
                </p>
                <p>
                  Le nouveau roi de France est <strong>Louis-XVII de 1815 à 1824</strong>. À la mort
                  de Louis XVIII en 1824 c'est <strong>Charles X qui monte sur le trône</strong>.
                </p>
                <p>
                  Ce régime prendra fin avec <strong>la Deuxième Révolution en 1830</strong>.
                </p>
              </Grid>
              <Grid item md={4}>
                <Image
                  imgStyle={{ width: "100%", objectFit: "contain", overflow: "hidden" }}
                  src={louis18}
                  title="Louis XVIII"
                  caption="Louis XVIII"
                />
              </Grid>
            </Grid>
          </Card>
        </React.Fragment>
      ),
    },
    {
      label: "1830",
      fragment: (
        <React.Fragment>
          <Card
            style={{
              padding: "1rem",
            }}
          >
            <Title rank={3}>La monarchie de Juillet</Title>
            <Grid container>
              <Grid item md={8}>
                <p>
                  <strong>Suite aux trois glorieuses en 1830</strong>, le roi{" "}
                  <strong>Charles X est contraint à abdiquer</strong>.
                </p>
                <p>
                  Le nouveau roi de France est{" "}
                  <strong>
                    Louis-Philippe 1<sup>er</sup>
                  </strong>
                  .<br />
                  Il dirigera la France jusqu'à <strong>la Révolution de 1848</strong> qui le
                  forcera à abdiquer.
                </p>
              </Grid>
              <Grid item md={4}>
                <Image
                  imgStyle={{ width: "100%", objectFit: "contain", overflow: "hidden" }}
                  src={monarchieJuillet}
                  title="La monarchie de Juillet"
                  caption="Avènement de la monarchie de Juillet"
                />
              </Grid>
            </Grid>
          </Card>
        </React.Fragment>
      ),
    },
    {
      label: "1848",
      fragment: (
        <React.Fragment>
          <Card
            style={{
              padding: "1rem",
            }}
          >
            <Title rank={3}>La Deuxième République</Title>
            <Grid container>
              <Grid item md={8}>
                <p>
                  <strong>La France redevient une République en 1848</strong>.
                  <strong>Louis-Napoléon Bonaparte est élu président en 1848</strong>.
                </p>
                <p>
                  La République ne dure que trois ans et en 1851 Louis-Napoléon Bonaparte organise
                  un coup d'état et prend le pouvoir.{" "}
                  <strong>
                    Le sacre de Napoléon III en 1852 marque la fin de la Deuxième République
                  </strong>
                  .<br />
                </p>
              </Grid>
              <Grid item md={4}>
                <Image
                  imgStyle={{ width: "100%", objectFit: "contain", overflow: "hidden" }}
                  src={sermentNapoleon3}
                  title="Serment de Napoléon III"
                  caption="Serment de Napoléon III à la constitution de 1848"
                />
              </Grid>
            </Grid>
          </Card>
        </React.Fragment>
      ),
    },
    {
      label: "1852",
      fragment: (
        <React.Fragment>
          <Card
            style={{
              padding: "1rem",
            }}
          >
            <Title rank={3}>La Second Empire</Title>
            <Grid container>
              <Grid item md={4}>
                <Image
                  imgStyle={{ width: "100%", objectFit: "contain", overflow: "hidden" }}
                  src={sacreNapoleon3}
                  title="Portrait de Napoléon III"
                  caption="Portrait de Napoléon III présenté à l'exposition universelle de 1855"
                />
              </Grid>
              <Grid item md={8}>
                <p>
                  <strong>Napoléon III est sacré empereur en 1852</strong>.
                </p>
                <p>
                  Il gouvernera le pays <strong>jusqu'en 1870</strong>. Cette année il se fera
                  capturer sur le champ de bataille par l'armée de Prusse.
                </p>
                <p>
                  Sa capture déclenchera la chute de l'empire et la création de la{" "}
                  <strong>Troisème République</strong>
                </p>
              </Grid>
            </Grid>
          </Card>
        </React.Fragment>
      ),
    },
    {
      label: "1870",
      fragment: (
        <React.Fragment>
          <Card
            style={{
              padding: "1rem",
            }}
          >
            <Title rank={3}>La Troisième République</Title>
            <Grid container>
              <Grid item md={8}>
                <p>
                  <strong>La Troisième République</strong> est la République qui a duré le plus
                  longtemps, mais aussi le Régime le plus long depuis 1789.
                </p>
                <p>
                  Elle instaurera certains des fondements de notre société comme{" "}
                  <strong>
                    l'école gratuite, laïque et obligatoire, la liberté de la presse et la
                    séparation de l'Église et de l'État
                  </strong>
                </p>
                <p>Le premier président de la Troisième République est Adolphe Thiers</p>
              </Grid>
              <Grid item md={4}>
                <Image
                  imgStyle={{ width: "100%", objectFit: "contain", overflow: "hidden" }}
                  src={republique3}
                  title="Léon Gambetta proclamant la République"
                  caption="Léon Gambetta proclamant la République à l'hôtel de ville de Paris en 1870"
                />
              </Grid>
            </Grid>
          </Card>
        </React.Fragment>
      ),
    },
    {
      label: "1940",
      fragment: (
        <React.Fragment>
          <Card
            style={{
              padding: "1rem",
            }}
          >
            <Title rank={3}>Le régime de Vichy</Title>
            <Grid container>
              <Grid item md={8}>
                <p>
                  Après de lourdes défaites face aux Allemands au cours de la{" "}
                  <strong>Seconde Guerre Mondiale</strong>, l'assemblée nationale vote les pleins
                  pouvoirs à Philippe Pétain, <strong>le 10 juillet 1940</strong>. Pétain se déclare
                  chef de 'État Français' et la mention de République française disparaît des actes
                  officiels.
                </p>
                <p>
                  Cette date marque la fin de la Troisième République et le début du{" "}
                  <strong>régime de Vichy</strong>.
                </p>
                <p>Nous étudierons ensemble cette période dans une autre Leçon</p>
              </Grid>
              <Grid item md={4}>
                <Image
                  imgStyle={{ width: "100%", objectFit: "contain", overflow: "hidden" }}
                  src={petain}
                  title="Philippe Pétain"
                  caption="Philippe Pétain"
                />
              </Grid>
            </Grid>
          </Card>
        </React.Fragment>
      ),
    },
  ];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "row wrap",
    marginTop: "1rem",
    fontSize: "0.6rem",
  },
  cell: (props: any) => ({
    height: "5rem",
    width: "4rem",
    backgroundColor: "#DDDDEE",
    textAlign: "center",
    position: "relative",
    "&::before": {
      content: `""`,
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      border: "solid 2px black",
      borderRight: "none",
    },
  }),
  arrow: {
    marginTop: "1.6rem",
    height: "10rem",
    width: "6rem",
    backgroundColor: "black",
    clipPath: "polygon(0% 25%, 40% 25%, 40% 0%, 100% 50%, 40% 100%, 40% 75%, 0% 75%)",
    position: "relative",
    "&::before": {
      content: `""`,
      position: "absolute",
      top: 3,
      bottom: 3,
      left: 3,
      right: 3,
      backgroundColor: "#DDDDEE",
      clipPath: "polygon(0% 25%, 40% 25%, 40% 0%, 100% 50%, 40% 100%, 40% 75%, 0% 75%)",
    },
  },
  inner: {
    position: "absolute",
    left: 2,
    bottom: 0,
    right: 0,
    borderBottom: "solid 2px black",
    borderTop: "solid 2px black",
    height: "1.5rem",
    backgroundColor: "#CCE",
  },
}));

function Frize(props: any) {
  const classes = useStyles(props);

  const FriseCell = (props: { year: number; children?: React.ReactChild | React.ReactChild[] }) => (
    <div>
      {props.year}
      <Box className={classes.cell} id={`frise-${props.year}`}>
        {props.children}
      </Box>
    </div>
  );

  return (
    <Box className={classes.root}>
      <FriseCell year={1789}>
        Monarchie
        <div className={classes.inner} />
      </FriseCell>
      <FriseCell year={1792}>
        Première République
        <div
          className={classes.inner}
          style={{
            left: "80%",
            borderLeft: "solid 2px black",
          }}
        />
      </FriseCell>
      <FriseCell year={1804}>
        Premier Empire
        <div className={classes.inner} />
      </FriseCell>
      <FriseCell year={1815}>
        Restauration
        <div
          className={classes.inner}
          style={{
            right: "50%",
            borderRight: "solid 2px black",
          }}
        />
        <div
          className={classes.inner}
          style={{
            left: "50%",
          }}
        />
      </FriseCell>
      <FriseCell year={1830}>
        Monarchie de Juillet
        <div className={classes.inner} />
      </FriseCell>
      <FriseCell year={1848}>
        Deuxième République
        <div
          className={classes.inner}
          style={{
            left: "75%",
            borderLeft: "solid 2px black",
          }}
        />
      </FriseCell>
      <FriseCell year={1852}>
        Second Empire
        <div className={classes.inner} />
      </FriseCell>
      <FriseCell year={1870}>Troisième République</FriseCell>
      <Box className={classes.arrow} />
    </Box>
  );
}

export default function Resume(props: any) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = resumeSteps();
  return (
    <Page>
      <Title>Résumé</Title>
      <Title rank={2}>Fiches pratiques</Title>
      <Stepper activeStep={activeStep} steps={steps} onActiveStepChange={setActiveStep} />
      <div>{steps[activeStep].fragment}</div>
      <Title rank={2}>Frise Chronologique</Title>
      <Frize />
      <p>
        Déssine la frise ci-dessus et colorie :
        <ul>
          <li>
            en <TextImportant color="primary">Bleu</TextImportant> les périodes sous la Monarchie
          </li>
          <li>
            en <TextImportant>Rouge</TextImportant> les périodes sous la République
          </li>
        </ul>
        Choisis une couleur pour chaque Roi et empereur, de Louis XVI à Napoléon III et dans la
        frise. Remplis les cases grises avec la couleur du roi qui gouverne à cette période. Pense à
        faire la légende pour les couleurs des rois.
      </p>
    </Page>
  );
}
