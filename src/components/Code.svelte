<section>
  <div class="code">
    <span style="color: #6c99bb; margin-right: 1ch">
      {'const'}
    </span>
    <span style="color: #9e86c8; margin-right: 1ch">
      {'url'}
    </span>
    <span style="color: #ff3e00">
      {'= `'}
    </span>
    <span style="color: #e5b567">
      {'hmif.link/'}
    </span>
    <span style="color: #ff3e00">
      {'${'}
    </span>
    <span style="color: #ffffff">
      {'route'}
    </span>
    <span style="color: #ff3e00">
      {'}`'}
    </span>
  </div>
</section>

<style>
  section {
    text-align: center;
    margin: 100px 0;
    width: 100%;
    height: 400px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .code {
    display: flex;
    font-size: 4em;
    font-weight: 100;
    font-family: monospace;
    width: 32ch;
    animation: typing 3s steps(32), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: white;
    }
  }
</style>
