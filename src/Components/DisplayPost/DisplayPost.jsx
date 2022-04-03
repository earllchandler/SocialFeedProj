const  DisplayPost = (props) => {
    return (  
      <div className="card">
        <table class="table">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index) => {
            return (
              <tr key={index}>
                {/* <td>{index + 1}</td> */}
                <td>{entry.name}</td>
                <td>{entry.post}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>

    );
}
 
export default DisplayPost;