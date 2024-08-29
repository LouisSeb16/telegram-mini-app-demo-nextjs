"use client";

import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";

import { Link } from "@/components/Link/Link";

import tonSvg from "./_assets/ton.svg";

export default function Home() {
  return (
    <List>
      <Section header="TMA with Nextjs">
        <Link href="/ton-connect">
          <Cell
            before={
              <Image src={tonSvg.src} style={{ backgroundColor: "#007AFF" }} />
            }
            subtitle="Connect your TON wallet"
          >
            TON Connect
          </Cell>
        </Link>
      </Section>
      <Section header="TMA with Nextjs">
        <Link href="/theme-params">
          <Cell subtitle="Telegram application palette information">
            Building TMA with Nextjs App router on TON
          </Cell>
        </Link>
        <Link href="/init-data">
          <Cell subtitle="Telegram application init data">
            Application Init data
          </Cell>
        </Link>
      </Section>
    </List>
  );
}
