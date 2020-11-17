window.addEventListener('DOMContentLoaded', () => {
  Livewire.on('showModal', () => {
        $("#exampleModalScrollable").modal('show')
  });

  Livewire.on('hideModal', () => {
        $("#exampleModalScrollable").modal('hide')
  });

});
