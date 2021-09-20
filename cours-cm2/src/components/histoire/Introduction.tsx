import { Typography, Button } from "@material-ui/core";
import { Page, Title } from "../common";

export default function Introduction(props: any) {
  return (
    <Page>
      <Title>Histoire</Title>
      <Typography>
        Cette année, l'histoire portera sur trois grands thèmes
        <ul>
          <li>Le temps de la République</li>
          <ul>
            <li>
              <Button href="/histoire/origine-de-la-republique" color="primary">
                Les origines de la République (1792-1870) : une histoire mouvementée
              </Button>
            </li>
            <li>
              <Button href="/histoire/citoyennete-democratie" color="primary">
                La République française : citoyenneté et démocratie
              </Button>
            </li>
            <li>
              <Button href="/histoire/jules-ferry" color="primary">
                Jules Ferry et l'école primaire
              </Button>
            </li>
            <li>
              <Button href="/histoire/empire-colonial" color="primary">
                La constitution de l'empire colonial français
              </Button>
            </li>
          </ul>
          <li>
            <Button href="/histoire/temps-de-la-republique" color="primary">
              L'âge industriel en France
            </Button>
            <ul>
              <li>
                <Button href="/histoire/temps-de-la-republique" color="primary">
                  Les nouvelles inventions du XIXème siècle : énergie et machines
                </Button>
              </li>
              <li>
                <Button href="/histoire/temps-de-la-republique" color="primary">
                  La révolution industrielle, le travail : à la mine, aux l'ateliers, dans les
                  usines
                </Button>
              </li>
              <li>
                <Button href="/histoire/temps-de-la-republique" color="primary">
                  L'urbanisation au XIXème siècle
                </Button>
              </li>
            </ul>
          </li>
          <li>
            <Button href="/histoire/temps-de-la-republique" color="primary">
              La France, des guerres mondiales à l'Union Européenne
            </Button>
          </li>
          <ul>
            <li>
              <Button href="/histoire/temps-de-la-republique" color="primary">
                La première guerre mondiale (1914-1918)
              </Button>
            </li>
            <li>
              <Button href="/histoire/temps-de-la-republique" color="primary">
                L'entre-deux-guerres (1919-1939)
              </Button>
            </li>
            <li>
              <Button href="/histoire/temps-de-la-republique" color="primary">
                La seconde guerre mondiale (1939-1945)
              </Button>
            </li>
            <li>
              <Button href="/histoire/temps-de-la-republique" color="primary">
                Les étapes de la construction européenne
              </Button>
            </li>
          </ul>
        </ul>
      </Typography>
    </Page>
  );
}
