<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { RoyaleResponse } from "../types";
const token = import.meta.env.VITE_TOKEN_PROXY;
const Component = defineComponent({
  name: "Result",
  props: {
    tag: String,
  },
  setup(props) {
    props.tag;
  },
  data() {
    return {
      loading: true,
      data: {} as RoyaleResponse,
    };
  },
  computed: {
    badges() {
      return [
        {
          name: "grandChallenge",
          logoUrl: "/src/assets/grandChallengeUrl.jpeg",
          value:
            this.data.badges.find((badge) => badge.name === "Grand12Wins")
              ?.progress || 0,
        },
        {
          name: "classicalChallenge",
          logoUrl: "/src/assets/classicalChallengeUrl.jpeg",
          value:
            this.data.badges.find((badge) => badge.name === "Classic12Wins")
              ?.progress || 0,
        },
        {
          name: "bestTrophies",
          logoUrl: "/src/assets/bestTrophiesUrl.jpeg",
          value: this.data.bestTrophies,
        },
        {
          name: "trophies",
          logoUrl: "/src/assets/trophiesUrl.jpeg",
          value: this.data.trophies,
        },
        {
          name: "crl",
          logoUrl: "src/assets/crlUrl.png",
          value: this.data.badges
            .filter((badge) => badge.name.startsWith("Crl20Wins"))
            .map((crlBadge) => crlBadge.progress)
            .join(" - "),
        },
        {
          name: "topLadder",
          logoUrl: "/src/assets/trophiesUrl.jpeg",
          value: this.data.badges
            .filter((badge) => badge.name.startsWith("LadderTop1000"))
            .map((ladderBadge) => ladderBadge.progress)
            .join(" - "),
        },
        {
          name: "globalTournament",
          logoUrl: "src/assets/globalTournamentUrl.jpeg",
          value: this.data.badges
            .filter((badge) => badge.name.startsWith("LadderTournamentTop1000"))
            .map((globalTournamentBadge) => globalTournamentBadge.progress)
            .join(" - "),
        },
        {
          name: "year",
          logoUrl: "src/assets/yearUrl.png",
          value: this.data.badges.filter((badge) =>
            badge.name.startsWith("Played")
          ).length,
        },
      ];
    },
  },
  mounted(): void {
    axios
      .get<RoyaleResponse>(
        `https://proxy.royaleapi.dev/v1/players/%23${this.tag}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        this.data = res.data;
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.loading = false;
      });
  },
});

export default Component;
</script>

<template>
  <h1>
    You searched <span>{{ tag }}</span>
  </h1>
  <h2 v-if="loading">Collecting data ...</h2>
  <section v-if="data.role">
    <h3>{{ data.name }}</h3>
    <table>
      <tr v-for="badge in badges">
        <td>{{ badge.value }}</td>
        <td>
          <img :src="badge.logoUrl" :alt="badge.name" />
        </td>
      </tr>
    </table>
  </section>
</template>

<style scoped>
h1 {
  color: crimson;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
table {
  border: solid 3px darkblue;
  max-width: 700px;
  width: 100%;
}
tr {
  border: solid 3px darkblue;
}
td {
  border: solid 3px darkblue;
}
img {
  height: 30px;
  width: 30px;
}
h3 {
  font-size: large;
}
</style>
