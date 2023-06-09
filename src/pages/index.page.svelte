<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import CatchAll from "../routes/CatchAll.svelte";

  export let urlOriginal: string;
</script>

<div class="all">
  <main>
    <Router url={urlOriginal}>
      <Route path="*" component={CatchAll} />
    </Router>
  </main>
</div>

<style>
  .all {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1 0 auto;
    display: flex;
    height: 100%;
  }
</style>
