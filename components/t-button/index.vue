<template>
    <button
      @click="onClickAction"
    :type="[
      type === 'submit' ? 'submit' :
      (type === 'button' ? 'button' :
      (type === 'reset' ? 'reset' :
      '')),
    ]"
    :class="[
      'btn',
      variant === 'filled-primary' ? 't-btn-primary' :
      (variant === 'filled-secondary' ? 't-btn-secondary' :
      (variant === 'filled-success' ? 't-btn-success' :
      (variant === 'filled-danger' ? 't-btn-danger' :
      (variant === 'filled-warning' ? 't-btn-warning' :
      (variant === 'filled-info' ? 't-btn-info' :
      (variant === 'filled-light' ? 't-btn-light' :
      (variant === 'filled-dark' ? 't-btn-dark' :
      ''))))))),
      fullwidth === 'fullwidth' ? 'btn-block' : ''
    ]">
    <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'tButton',
  props: {
    type: String,
    variant: String,
    fullwidth: String,
  },
  methods:{
    onClickAction(){
      this.$emit('onClickAction')
    }
  }
}
</script>

<style scoped>
  .t-btn-primary {
    color: var(--white);
    background-color: var(--blue);
    border-color: var(--blue);
    border-radius: 8px;
  }
  .t-btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }

  .t-btn-secondary {
    color: var(--white);
    background-color: var(--gray);
    border-color: var(--gray);
    border-radius: 8px;
  }
  .t-btn-secondary:hover {
    background-color: #5a6268;
    border-color: #5a6268;
  }

  .t-btn-success {
    color: var(--white);
    background-color: var(--green);
    border-color: var(--green);
    border-radius: 8px;
  }
  .t-btn-success:hover {
    background-color: #218838;
    border-color: #218838;
  }

  .t-btn-danger {
    color: var(--white);
    background-color: var(--red);
    border-color: var(--red);
    border-radius: 8px;
  }
  .t-btn-danger:hover {
    background-color: #b21f2d;
    border-color: #b21f2d;
  }

  .t-btn-warning {
    color: var(--black);
    background-color: var(--yellow);
    border-color: var(--yellow);
    border-radius: 8px;
  }
  .t-btn-warning:hover {
    background-color: #e0a800;
    border-color: #e0a800;
  }

  .t-btn-info {
    color: var(--white);
    background-color: #117a8b;
    border-color: #117a8b;
    border-radius: 8px;
  }
  .t-btn-info:hover {
    background-color: #138496;
    border-color: #138496;
  }

  .t-btn-light {
    color: var(--black);
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    border-radius: 8px;
  }
  .t-btn-light:hover {
    background-color: #e2e6ea;
    border-color: #e2e6ea;
  }

  .t-btn-dark {
    color: var(--white);
    background-color: var(--black);
    border-color: var(--black);
    border-radius: 8px;
  }
  .t-btn-dark:hover {
    background-color: #23272b;
    border-color: #23272b;
  }
</style>
