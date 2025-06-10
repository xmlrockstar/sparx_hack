(function() {
    const spanElement = document.querySelector('span[class^="_TextElement_"]');
    
    if (spanElement) {
		const content = spanElement.innerHTML;
        const regex = /<span class="m.*?">.*?<\/span>|<m.*?>.*?<\/m.*?>|<(?:.|\n)*?>|&nbsp;/g;
		
		const cleanedContent = content.replace(regex, '');
		
        chrome.runtime.sendMessage({ content: spanElement.innerHTML });
		
		fetch('http://localhost:3000/compute', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ content: cleanedContent })
		})
		.then(response => response.json())
		.then(data => {
			console.log('Data sent to backend:', data.response);
			chrome.runtime.sendMessage({ content: data.response || 'No valid response' });
		})
		.catch(error => {
			console.error('Error sending to backend:', error);
			chrome.runtime.sendMessage({ content: 'error contracting backend' });
		});
    } else {
        chrome.runtime.sendMessage({ content: '[No Sparx question found. Please try again.]' });
    }
})();

