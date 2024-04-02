import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';

export const copySignatureToClipboard = (signatureRef) => {
  const range = document.createRange();
  range.selectNode(signatureRef.current);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  // Show SweetAlert2 success message
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Signature copied to clipboard',
    showConfirmButton: false,
    timer: 1500,
  });
};

export const downloadSignatureAsImage = (signatureRef) => {
  html2canvas(signatureRef.current).then((canvas) => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'signature.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};
