import React from "react";

import { Page, Title } from "./common";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Link from "@material-ui/core/Link";

export default function Sommaire() {
  return (
    <Page>
      <Title>Sommaire</Title>
      <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
        <TreeItem nodeId="1" label={<Link href="/histoire">histoire</Link>}>
          <TreeItem
            nodeId="2"
            label={
              <Link href="/histoire/origines-de-la-republique">Les origines de la République</Link>
            }
          />
        </TreeItem>
        <TreeItem nodeId="3" label={<Link href="/maths">maths</Link>}>
        </TreeItem>
      </TreeView>
    </Page>
  );
}
