window.onload = () => {
  const ticketId = 'TICKET-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  document.getElementById('ticket').innerText = `🎟️ Your Ticket: ${ticketId}`;

  // OPTIONAL: Send to backend or email
  // fetch('/store-ticket', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ ticketId })
  // });
};
