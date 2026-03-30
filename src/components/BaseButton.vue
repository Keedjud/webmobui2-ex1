<script setup>
 defineProps({
   label: {
     type: String,
   },
   type: {
     type: String,
     default: 'primary'
   },
   disabled: {
     type: Boolean,
     default: false
   }
 });
</script>

<template>
  <button :class="['btn', type]" :disabled="disabled">
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
  .btn {
    /* Base button styles */
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 500;
    font-family: var(--sans);
    border-radius: 8px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    letter-spacing: 0.025em;
    text-transform: none;
    position: relative;
    overflow: hidden;
    outline: none;
  }

  /* Hover effect for all buttons */
  .btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  /* Active state */
  .btn:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Focus state for accessibility */
  .btn:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  /* Disabled state */
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  /* Primary button */
  .primary {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
  }

  .primary:hover:not(:disabled) {
    background: var(--accent);
    filter: brightness(1.1);
    border-color: var(--accent);
  }

  /* Secondary button */
  .secondary {
    background: transparent;
    color: var(--accent);
    border-color: var(--accent);
  }

  .secondary:hover:not(:disabled) {
    background: var(--accent-bg);
    border-color: var(--accent);
  }

  /* Tertiary/Ghost button */
  .tertiary {
    background: var(--social-bg);
    color: var(--text-h);
    border-color: transparent;
  }

  .tertiary:hover:not(:disabled) {
    background: var(--accent-bg);
    color: var(--accent);
  }

  /* Danger button */
  .danger {
    background: #ef4444;
    color: white;
    border-color: #ef4444;
  }

  .danger:hover:not(:disabled) {
    background: #dc2626;
    border-color: #dc2626;
  }

  /* Success button */
  .success {
    background: #10b981;
    color: white;
    border-color: #10b981;
  }

  .success:hover:not(:disabled) {
    background: #059669;
    border-color: #059669;
  }

  /* Ripple effect on click */
  .btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  .btn:active:not(:disabled)::after {
    width: 300px;
    height: 300px;
    opacity: 0;
  }

  /* Responsive design */
  @media (max-width: 1024px) {
    .btn {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
</style>