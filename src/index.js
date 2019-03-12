import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'
//import moment from 'moment';

const FileList = ( { files }) => (
	<table className="file-list">
		<tbody>
			{	/*
				mapping over an array is how you render 
				lists of things in react (unique keys are needed 
				for an array of elements)
				*/
				files.map(file => 
					(<tr className="file-list-item" key={file.id}>
						<td className="file-name">{file.name}</td>
					</tr>)
				)
			}
		</tbody>
	</table>
);
FileList.propTypes = {
	files: PropTypes.array
};

function FileListItem({ file }) {
	return(<div>file list item</div>);
}
FileListItem.propTypes = {
	file: PropTypes.shape({
		name: PropTypes.string,
		type: PropTypes.string,
		commit: PropTypes.string,
		time: PropTypes.string
	})
}

function FileName({ file }) {
	return(<span>file name</span>);
}
FileName.propTypes = {
	file: PropTypes.shape({
		name: PropTypes.string
	})
}

function FileIcon({ file }) {
	return(<span>file icon</span>);
}
FileIcon.propTypes = {
	file: PropTypes.shape({
		type: PropTypes.string
	})
}

function CommitMessage({ commit }) {
	return(<span>commit message</span>);
}
CommitMessage.propTypes = {
	commit: PropTypes.shape({
		message: PropTypes.string
	})
}

function Time ({ time }) {
	
}

const testFiles = [ 
	{
	id: 1,
	    name: 'src',
	    type: 'folder',
	    updated_at: "2016-07-11 21:24:00",
	    latestCommit: {
	      message: 'Initial commit'
	    }
	},
	{
	id: 2,
	    name: 'tests',
	    type: 'folder',
	    updated_at: "2016-07-11 21:24:00",
	    latestCommit: {
	      message: 'Initial commit'
	    }
	},
	{
	id: 3,
	    name: 'README',
	    type: 'file',
	    updated_at: "2016-07-18 21:24:00",
	    latestCommit: {
	      message: 'Added a readme'
	    }
	}, 
];



ReactDOM.render(<FileList files={testFiles}/>, document.getElementById('root'));





